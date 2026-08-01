import { Producto } from "./Producto";

export class ProductoPreventa extends Producto{

    get obtenerMensajeDelPrecio(){
        return `Preventa $${this._precio.toLocaleString("es-AR")}`
    }
}