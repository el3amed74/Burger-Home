"use client";
import { useState } from "react";
import DescNavbar from "./DescNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const openNaveHandler = () => setShowNav(true);
    const closeNaveHandler = () => setShowNav(false);
    return (
        <div>
            <DescNavbar  open={openNaveHandler} />
            { showNav && <MobileNavbar shownav={showNav} close={closeNaveHandler}/>}
        </div>
    )
}
export default Navbar;