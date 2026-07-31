import '../estilos/dia-del-ninio.css'
import '../estilos/productos.css'
import { productosDiaDelNinio } from '../data/productosDiaDelNinio';
import ProductCard from './ProductCard';

function DiaDelNinio(){
    return(
        <section id="dia-del-ninio">
            <div className="container">
                <div className="products-header">
                    <div className="section-tag">ESPECIAL DÍA DEL NIÑO</div>
                    <h1 className="section-title">Sabor a juego, risas y fantasía</h1>
                    <h2>Hacé tu pedido hasta el 12/08 para retirar por el local el 15/8.</h2>
                </div>
                 <div className="products-grid">
                {
                    productosDiaDelNinio.map(producto => (
                    <ProductCard key={producto.id} tag={"especial-dia-del-ninio"} producto={producto}/>
                    ))
                }
                </div>
            </div>
        </section>
    );
}

export default DiaDelNinio;