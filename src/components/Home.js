import React from "react";
import logotipo2 from "../imagenes/logotipo2.png";

function Home() {
    // Estilo fijo para modo noche
    const containerStyle = {
        padding: "20px",
        backgroundColor: "#222", // fondo oscuro modo noche
        color: "#fff",
        transition: "all 0.3s ease"
    };

    // Centrar el título
    const headerStyle = {
        textAlign: "center"
    };

    // Centrar la imagen y hacerla responsiva
    const imageStyle = {
        maxWidth: "100%",
        height: "auto",
        display: "block",
        margin: "20px auto"
    };

    // Estilo para el texto final
    const footerTextStyle = {
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "30px",
        color: "#aaa"
    };

    return (
        <main style={containerStyle}>
            <h1 style={headerStyle}>Guru</h1>
            <img src={logotipo2} alt="Imagen del proyecto integrador" style={imageStyle} />
            <p>
                "Guru" es una plataforma web que busca facilitar la venta de artesanías,
                brindando herramientas prácticas a los artesanos y promoviendo la cultura
                local. Enfocado inicialmente en Bogotá, el proyecto busca conectar creadores y
                compradores, rescatando el valor de lo hecho a mano. Se analizará la competencia,
                se diseñará una marca única y se desarrollará una base de datos funcional, con
                miras a expandirse y generar impacto cultural y social.
            </p>
            <ul>
                <li>
                    Facilidad de uso para artesanos: La plataforma ofrecerá herramientas prácticas y
                    didácticas que permitan a los artesanos publicar y vender sus productos sin
                    necesidad de conocimientos técnicos avanzados.
                </li>
                <li>
                    Promoción de la cultura local: "Guru" busca preservar y difundir la riqueza cultural
                    de las artesanías, conectando a los compradores con productos auténticos y con el
                    significado detrás de cada obra.
                </li>
                <li>
                    El proyecto apunta a generar impacto social en Bogotá y sus alrededores, con la
                    posibilidad de expandirse a nivel nacional o internacional.
                </li>
            </ul>
            <p style={footerTextStyle}>By Cesar Martinez - TDS</p>
        </main>
    );
}

export default Home;