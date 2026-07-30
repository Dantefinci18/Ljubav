import '../estilos/historia.css'

function Historia(){
    return(
        <section id="historia">
        <div className="container">
            <h2 className="section-title" style={{ textAlign: "center"}}>Sobre mí</h2>
            <div className="historia">
            <img src="imagenes/historia.webp" alt="Foto historia Ljubav" />
            <p className="historia-text">Ljubav nació del deseo de compartir lo que más amo en el mundo: la pastelería.
                Trabajo de manera artesanal, con recetas propias e ingredientes nobles, asegurando que cada momento que compartas en tu mesa sea inolvidable.
                Cada pieza es única y confeccionada especialmente para vos. Por eso trabajo a pedido con una agenda semanal limitada.</p>
            </div>
        </div>
        </section>
    )
}

export default Historia;