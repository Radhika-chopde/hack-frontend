import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function NavBar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">AboutUs</a>
                <a href="#">Dashboard</a>
                <a href="#">Login</a>
                <button className="nav-button nav-close-button" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-button" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}
export default NavBar;