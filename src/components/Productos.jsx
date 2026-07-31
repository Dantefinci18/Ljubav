import '../estilos/productos.css'
import ProductCard from "./ProductCard";
import { productos } from "../data/productos";

function Productos(){
    return(
        <section id="productos">
            <div className="container">
                <div className="products-header">
                    <div className="section-tag">Nuestra pastelería</div>
                    <h1 className="section-title">Hecho con amor, <em style={{fontFamily:"Playfair Display, serif", fontStyle:"italic"}}>siempre fresco</em></h1>
                </div>
                <div className="products-grid">
                {
                    productos.map(producto => (
                    <ProductCard key={producto.id} tag={"nuestra-pasteleria"} producto={producto}/>
                    ))
                }
                </div>
                <div style={{textAlign:"center", marginTop:"3rem"}}>
                <a href="https://wa.me/c/5491121772084" 
                    target="_blank" class="btn" 
                    style={{background:"#fff", color:"#7a4a2a", border:"2px solid #7a4a2a", boxShadow:"none"}}>
                         Mirá el catálogo completo
                </a>
                </div>
            </div>
        </section>
    );
}

export default Productos;