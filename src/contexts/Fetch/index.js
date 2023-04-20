import Cookies from 'universal-cookie';
import { redirect } from 'react-router-dom';

export default async function fetchApi(path, options) {
    const cookies = new Cookies();
    const serverUrl = process.env.REACT_APP_SERVER_DOMAIN;
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');
    const HEADER_AUTHORIZATION_PREFIX = "Airpot";

    if (!options.headers) {
        options.headers = {};
    }
    options.headers['accessToken'] = `${HEADER_AUTHORIZATION_PREFIX} ${accessToken}`;

    const req = await fetch(`${serverUrl}${path}`, options);
    const res = await req.json();
    if (res.status === 500 && res.message === 'Token is Exprired!') {
        const req1 = await fetch(`${serverUrl}/api/v1/auth/token`, {
            method: 'GET',
            headers: {
                'refreshToken': `${HEADER_AUTHORIZATION_PREFIX} ${refreshToken}`
            }
        });
        const res1 = await req1.json();
        if (res1.status === 500 && res1.message === 'Token is Exprired!') {
            // refreshToken is Exprired. need login
            if (window && window.location && window.location.pathname === '/login') {
                // not do anything
            } else {
                redirect("/login");
            }
            return res1;
        } else if (res1.accessToken) {
            cookies.set("accessToken", res1.accessToken, { path: "/" });
            const resCallBack = await fetchApi(path, options);
            return resCallBack;
        } else {
            return res1;
        }
    }
    return res;
};