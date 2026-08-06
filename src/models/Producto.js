export class Producto{
    constructor(id,nombre,precio,rutaImagen,descripcion,tipo,aclaracion,metaDescription){
        this.id = id;
        this.nombre = nombre;
        this._precio = precio;
        this.rutaImagen = rutaImagen;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.aclaracion = aclaracion;
        this.metaDescription = metaDescription;
    }

    get obtenerMensajeDelPrecio(){
        return `Desde $${this._precio.toLocaleString("es-AR")}`
    }
}