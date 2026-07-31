import { Producto } from "./Producto";

export class ProductoPreventa extends Producto{
    get tag(){
        return "Especial Día del Niño";
    }

    get backLink(){
        return "/#dia-del-ninio";
    }

    get obtenerMensajeDelPrecio(){
        return `Preventa $${this._precio.toLocaleString("es-AR")}`
    }
}