import React from "react"

export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": null}   //try adding 'null' instead of an empty string
        >
            <img
                className="nav--logo_icon"
                src="./images/react-icon-small.png"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}