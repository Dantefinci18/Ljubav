export class Producto{
    constructor(id,nombre,precio,rutaImagen,descripcion,tipo,aclaracion){
        this.id = id;
        this.nombre = nombre;
        this._precio = precio;
        this.rutaImagen = rutaImagen;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.aclaracion = aclaracion;
    }

    get tag(){
        return "Nuestra pastelería";
    }

    get backLink(){
        return "/#productos";
    }

    obtenerMensajeDelPrecio(){
        return `desde $${this._precio.toLocaleString("es-AR")}`
    }
}