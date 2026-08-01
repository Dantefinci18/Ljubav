import { useEffect} from "react";
import '../estilos/navbar.css'

function Navbar() {
    useEffect(()=>{

        const navbar=document.getElementById("navbar");
        const scroll=()=> { navbar.classList.toggle("scrolled", window.scrollY > 40); };

        window.addEventListener("scroll",scroll);

        return ()=> window.removeEventListener("scroll",scroll);

    },[]);

    
    return (

    <nav id="navbar">

        <a className="nav-logo" href="/" aria-label="Ir al inicio de Ljubav">
            <img src="/imagenes/titulo_en_negro.webp" className="nav-logo-titulo" alt="Ljubav" height={58} width={140}/>
        </a>

    </nav>

    );
}

export default Navbar;