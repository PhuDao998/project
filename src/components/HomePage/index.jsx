import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { useAuth } from "../../contexts/Authenticate";
import { Navigate } from "react-router-dom";


export default function HomePage() {
    const { currentUser } = useAuth();
    console.log("currentUser",currentUser)
    return (
        <div className="home_container">
            <Navbar />
            <Sidebar />
            <Outlet />
            {currentUser ? null : <Navigate to="/login" replace={true} />}
        </div>
    );
}