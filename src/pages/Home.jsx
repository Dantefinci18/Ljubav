import Hero from "../components/Hero";
import Contacto from "../components/Contacto";
import Historia from "../components/Historia";
import Productos from "../components/Productos";
import DiaDelNinio from "../components/DiaDelNinio";
import WhatsAppButton from "../components/WhatsAppButton"

function Home(){
    return (
        <>
            <Hero />
            <Productos />
            <Historia />
            <Contacto />
            <WhatsAppButton />
        </>
    );
};
export default Home;