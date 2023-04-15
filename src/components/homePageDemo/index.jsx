import Navbar from "../navbar";
import Sidebar from "../sidebar";


export default function HomePage(){
    return (
        <div className="home_container">
            <Navbar />
            <Sidebar />
        </div>
    )
}