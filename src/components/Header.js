import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ backgroundColor: "#eee", padding: "10px" }}>
            <nav>
                <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                    <li style={{ marginRight: "15px" }}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li style={{ marginRight: "15px" }}>
                        <Link to="/acerca">Acerca</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
