
import {Link} from "react-router-dom";
export default function Admin() {
    const appDomain = process.env.REACT_APP_APP_DOMAIN;
    console.log("appDomain", appDomain);
    return (
        <div>
            Admin page
        </div>
    );
}