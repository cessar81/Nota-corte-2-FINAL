import React from "react";

function Acerca() {
    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #121212, #333)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    };

    const cardStyle = {
        background: "linear-gradient(135deg, #f5e6a2, #f5d78e)", // Degradado inspirado en el logotipo
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        padding: "30px",
        maxWidth: "800px",
        width: "100%",
        color: "#000" };

    const headerStyle = {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "2em",
        fontWeight: "bold"
    };


    const textStyle = {
        textAlign: "justify",
        lineHeight: "1.6",
        fontSize: "1em"
    };

    return (
        <main style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={headerStyle}>Acerca de</h1>
                <p style={textStyle}>
                    "Guru" nace como respuesta a la dificultad que enfrentan muchos artesanos para
                    comercializar sus productos en el entorno digital, debido al poco acceso o
                    conocimiento de herramientas tecnológicas. Este proyecto busca brindarles una plataforma
                    web sencilla y accesible que les permita exhibir, promocionar y vender sus artesanías, al
                    tiempo que se promueve la valoración de la cultura y tradición local. La motivación
                    principal es generar un espacio inclusivo y funcional que conecte a los artesanos con un
                    público más amplio, fomente el emprendimiento artístico y contribuya a la preservación
                    cultural. Con una visión de crecimiento, "Guru" aspira a tener un impacto social
                    significativo en Bogotá y proyectarse a futuro a nivel nacional e internacional.
                </p>
            </div>
        </main>
    );
}

export default Acerca;