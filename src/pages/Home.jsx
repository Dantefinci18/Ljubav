import Hero from "../components/Hero";
import Contacto from "../components/Contacto";
import Historia from "../components/Historia";
import Productos from "../components/Productos";
import DiaDelNinio from "../components/DiaDelNinio";

function Home(){
    return (
        <>
            <Hero />
            <DiaDelNinio />
            <Productos />
            <Historia />
            <Contacto />
        </>
    );
};
export default Home;