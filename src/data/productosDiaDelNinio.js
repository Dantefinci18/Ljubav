import { Producto } from "../models/Producto";
import { ProductoPreventa } from "../models/ProductoPreventa";

const DESCRIPCION_BOX_DIA_DEL_NINIO = `El box incluye: cookie Red Velvet, cookie Kinder, 2 mini donuts de vainilla cubiertas en choco blanco,\ 
3 chipas, Dot cake de vainilla con dulce de leche, dibujo para colorear y 3 lápices de colores.`

const ACLARACION_BOX_DIA_DEL_NINIO = `Precio de preventa encargando hasta el 05/08 inclusive, luego el valor será de  $37.000. \ 
Tomamos pedidos hasta el 12/08 inclusive o hasta agotar disponibilidad. \ 
Los pedidos deberán retirarse el 15/08 de 11 a 19hs por nuestro local en Arcos 3805, Nuñez. \ 
También podés enviar un servicio de transporte a retirarlo (como Uber o Cabify). Para reservar solicitamos el 50% se seña.`

const DESCRIPCION_BOX_COOKIES =  "Incluye las favoritas de los chicos: cookie Red Velvet, cookie Kinder y cookie de chips con rocklets."

const ACLARACION_SIN_PREVENTA = `Tomamos pedidos hasta el 12/08 inclusive o hasta agotar disponibilidad. \ 
Los pedidos deberán retirarse el 15/08 de 11 a 19hs por nuestro local en Arcos 3805, Nuñez. \
También podés enviar un servicio de transporte a retirarlo (como Uber o Cabify). Para reservar solicitamos el 50% se seña.`

const DESCRIPCION_BOX_DOT_CAKES = `Bizcochuelo de vainilla relleno de dulce de leche cubierto con ganache de chocolate blanco y granas de colores. \ 
Se presenta en pote con tapa y cucharita bamboo.`

export const productosDiaDelNinio = [
    new ProductoPreventa("box-dia-del-ninio","Box día del niño",31900,"/imagenes/box_dia_del_ninio.webp",DESCRIPCION_BOX_DIA_DEL_NINIO,null,ACLARACION_BOX_DIA_DEL_NINIO),
    new Producto("box-de-cookies","Box de cookies",16000,"/imagenes/box_cookies.webp",DESCRIPCION_BOX_COOKIES,null,ACLARACION_SIN_PREVENTA),
    new Producto("dot-cakes","Dot cakes",14000,"/imagenes/dot_cakes.webp",DESCRIPCION_BOX_DOT_CAKES,null,ACLARACION_SIN_PREVENTA)
]