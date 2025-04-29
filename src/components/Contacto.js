import React from "react";

function Contacto() {
    // Contenedor principal con fondo degradado oscuro
    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #121212, #333)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    };

    // Tarjeta blanca, con bordes redondeados y sombra para destacarse sobre el fondo oscuro
    const cardStyle = {
        backgroundColor: "#fff", // Tarjeta en blanco
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        padding: "30px",
        maxWidth: "600px",
        width: "100%",
        color: "#000" // Texto en negro para un buen contraste en tarjeta blanca
    };

    const headerStyle = {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "2em",
        fontWeight: "bold"
    };

    const textStyle = {
        textAlign: "center",
        lineHeight: "1.6",
        fontSize: "1em",
        marginBottom: "20px"
    };

    const footerStyle = {
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "0.9em",
        color: "#555" // Un gris oscuro para el pie de página
    };

    return (
        <main style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={headerStyle}>Contacto</h1>
                <p style={textStyle}>
                    Para mayor información, contácte en:
                    <br />
                    <strong>cdmartinezc1@academia.usbbog.edu.co</strong>
                </p>
                <p style={footerStyle}>Gracias :)</p>
            </div>
        </main>
    );
}

export default Contacto;