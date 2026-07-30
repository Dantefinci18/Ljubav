import Hero from "../components/Hero";
import Contacto from "../components/Contacto";
import Historia from "../components/Historia";
import Productos from "../components/Productos";

function Home(){
    return (
        <>
            <Hero />
            <Productos />
            <Historia />
            <Contacto />
        </>
    );
};
export default Home;