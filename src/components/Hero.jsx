import '../estilos/hero.css'

function Hero(){
    const mensaje = encodeURIComponent(
        "Hola Fiore, quiero encargar\n" +
        "Torta:\n" +
        "Fecha y hora de retiro:\n" +
        "Nombre:\n" +
        "Aclaraciones:\n"
    );

    return (
        <section className="hero" id="inicio">
            <img src="/imagenes/Cabecera.webp" className="hero-bg" />
            <img src="/imagenes/titulo_ljubav.webp" className="hero-titulo" />
            <h2> Pastelería artesanal de autor </h2>
            <p> Hacé tu pedido con 48hs de anticipación y retirá en nuestro local de Nuñez.</p>
            <a className="btn" href={`https://wa.me/5491121772084?text=${mensaje}`}> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{width:"1.6em",height:"1.6em",verticalAlign:"middle",marginRight:"0.4em"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.007 22l4.932-1.41A9.955 9.955 0 0012 22c5.522 0 10-4.478 10-10S17.521 2 11.999 2zm0 18a7.95 7.95 0 01-4.099-1.134l-.294-.174-3.048.87.866-3.141-.193-.307A7.943 7.943 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
                Encargar Ahora 
            </a>
        </section>
    );
}

export default Hero;