import { Link } from "react-router-dom";
import '../estilos/product-card.css'

function ProductCard({ producto }) {
  return (
    <Link className="product-card" to={`/productos/${producto.id}`}>
      <img className="product-img" src={producto.rutaImagen} alt={producto.nombre} />

      <div className="product-body">
        <div className="product-name">
          {producto.nombre}
        </div>

        <div className="product-price">
          {producto.obtenerMensajeDelPrecio}
        </div>

        <div className="product-desc">
          {producto.descripcion}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;