import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

export function Navbar() {
    
const {token, setToken} = useContext(AuthContext);

    const clearToken = () => {
        setToken("");
    }
    return (
        <nav>
            <div id="logo">
            <h2><Link to="/">Job Portal Home</Link></h2>
            </div>
            <div id="menu-wrapper">
                {/* <Link to="/">Home</Link> */}
                {!token ? <Link to="/admin/login">Admin Login</Link> : <Link to="/login" onClick={clearToken}>Admin Logout</Link>}
                
            </div>
        </nav>
    )
}
