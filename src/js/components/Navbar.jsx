import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const textColor = {
    color: "white"
};


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white" style={textColor}>
            <div className="container-fluid" style={textColor}>
                <a className="navbar-brand" href="#" style={textColor}>Start Boostrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={textColor}>
                    <span className="navbar-toggler-icon" style={textColor}></span>
                </button>
                <div className="collapse navbar-collapse position-absolute top-0 end-0" id="navbarNavDropdown" style={textColor}>
                    <ul className="navbar-nav" style={textColor}>
                        <li className="nav-item" style={textColor}>
                            <a className="nav-link active" aria-current="page" href="#" style={textColor}>Home</a>
                        </li>
                        <li className="nav-item" style={textColor}>
                            <a className="nav-link" href="#" style={textColor}>About</a>
                        </li>
                        <li className="nav-item" style={textColor}>
                            <a className="nav-link" href="#" style={textColor}>Services</a>
                        </li>
                        <li className="nav-item" style={textColor}>
                            <a className="nav-link" href="#" style={textColor}>Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar