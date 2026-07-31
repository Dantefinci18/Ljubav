import { Producto } from "../models/Producto";
import { ProductoPreventa } from "../models/ProductoPreventa";

const DESCRIPCION_BOX_DIA_DEL_NINIO = `El box incluye:cookie Red Velvet, cookie Kinder, 2 mini donuts de vainilla cubiertas en choco blanco,\ 
3 chipas, Dot cake de vainilla con dulce de leche, dibujo para colorear y 3 lápices de colores.`

const ACLARACION_BOX_DIA_DEL_NINIO = `Precio de preventa encargando hasta el 05/08 inclusive, luego el valor será de  $37.000. \ 
Tomamos pedidos hasta el 12/08 inclusive o hasta agotar disponibilidad. \ 
Los pedidos deberán retirarse el 15/08 de 11 a 19hs por nuestro local en Arcos 3805, Nuñez. \ 
También podés enviar un servicio de transporte a retirarlo (como Uber o Cabify). Para reservar solicitamos el 50% se seña.`



export const productosDiaDelNinio = [
    new ProductoPreventa("box-dia-del-ninio","Box día del niño",31900,"/imagenes/box_dia_del_ninio.webp",DESCRIPCION_BOX_DIA_DEL_NINIO,null,ACLARACION_BOX_DIA_DEL_NINIO),
]