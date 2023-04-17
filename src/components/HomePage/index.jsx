import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';

export default function HomePage() {
    // const cookies = new Cookies();
    // let refreshToken = cookies.get('refreshToken');
    // if (!refreshToken) {
    //     return <Navigate to="/login" />;

    // }
    return (
        <div className="home_container">
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    );
}