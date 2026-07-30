import { Producto } from "../models/Producto";

const DESCRIPCION_BROWNIE = `Base húmeda de chocolate intenso, dulce de leche, crema batida natural y merengue italiano. \ 
Tamaño: 24 x 24cm 12 a 14 porciones.`;

const DESCRIPCION_VASCA =  `Torta de queso con centro cremoso y un tostado artesanal único. \ 
Elegila clásica o con frutos rojos. Tamaño: 24 cm de diámetro 10 a 12 porciones.`;

const DESCRIPCION_VASCA_KEY_LIME = `La textura inigualable de nuestra torta vasca fusionada con el perfil cítrico de la Key Lime Pie. \ 
Tamaño: 24 cm de diámetro 10 a 12 porciones`;

const DESCRIPCION_TORTA_CUMPLE = `Diseñamos la torta que imaginás para ese día especial. \ 
Contanos tu idea y nosotros nos encargamos de ponerle el sabor y la estética que buscas.`;

const DESCRIPCION_BOX_LINGOTES = `La combinación perfecta de nuestras tortas en formato lingote. \ 
Ideal para compartir y descubrir tu favorita. Incluye 9 lingotes de 4x7cm, para 4-5 personas.`;

const DESCRIPCION_BOX_LJUBAV = "Una selección de nuestra pastelería. 16 mini brownies, 8 mini cookies y 12 alfajorcitos sableé.";

export const productos = [
  new Producto("brownie","Torta","Brownie",57990,"/imagenes/Brownie.webp", DESCRIPCION_BROWNIE),
  new Producto("vasca","Torta","Vasca",57990,"/imagenes/Vasca.webp", DESCRIPCION_VASCA), 
  new Producto("vasca-key-lime","Torta","Vasca Key Lime",59850,"/imagenes/Vasca_key_lime.webp",DESCRIPCION_VASCA_KEY_LIME),
  new Producto("torta-cumple","Torta","Torta Cumple",58550,"/imagenes/torta_cumple.webp",DESCRIPCION_TORTA_CUMPLE),
  new Producto("box-lingotes","Box","Box Lingotes",52190,"/imagenes/Box_mini_cakes.webp",DESCRIPCION_BOX_LINGOTES),
  new Producto("box-ljubav","Box","Box Ljubav",57890,"/imagenes/box_ljubav.webp",DESCRIPCION_BOX_LJUBAV)
];