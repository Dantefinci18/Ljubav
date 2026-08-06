import { Producto } from "../models/Producto";

const DESCRIPCION_BROWNIE = `Base húmeda de chocolate intenso, dulce de leche, crema batida natural y merengue italiano. \ 
Tamaño: 24 x 24cm 12 a 14 porciones.`;

const METADESCRIPTION_BROWNIE = `Torta Brownie artesanal con brownie de chocolate, dulce de leche y crema. Ideal para cumpleaños, \ 
celebraciones o regalar. Pedidos por WhatsApp con retiro en Núñez.`

const DESCRIPCION_VASCA =  `Torta de queso con centro cremoso y un tostado artesanal único. \ 
Elegila clásica o con frutos rojos. Tamaño: 24 cm de diámetro 10 a 12 porciones.`;

const METADESCRIPCION_VASCA = `Torta Vasca artesanal de textura cremosa y sabor intenso. Un clásico de la pastelería ideal para compartir o regalar. \ 
Pedidos por WhatsApp con retiro en Núñez.`

const DESCRIPCION_VASCA_KEY_LIME = `La textura inigualable de nuestra torta vasca fusionada con el perfil cítrico de la Key Lime Pie. \ 
Tamaño: 24 cm de diámetro 10 a 12 porciones`;

const METADESCRIPCION_VASCA_KEY_LIME = `Torta Vasca Key Lime con un delicado equilibrio entre la cremosidad del cheesecake y el sabor fresco del limón. \ 
Pastelería artesanal en Núñez. Pedidos por WhatsApp.`

const DESCRIPCION_TORTA_CUMPLE = `Diseñamos la torta que imaginás para ese día especial. \ 
Contanos tu idea y nosotros nos encargamos de ponerle el sabor y la estética que buscas.`;

const METADESCRIPCION_TORTA_CUMPLE = `Tortas de cumpleaños artesanales personalizadas para todas las edades. \ 
Elegí el diseño y los sabores para hacer de tu festejo un momento único. Pedidos por WhatsApp en Núñez.`

const DESCRIPCION_BOX_LINGOTES = `La combinación perfecta de nuestras tortas en formato lingote. \ 
Ideal para compartir y descubrir tu favorita. Incluye 9 lingotes de 4x7cm, para 4-5 personas.`;

const METADESCRIPCION_BOX_LINGOTES = `ox Lingotes con 9 porciones individuales de nuestras tortas artesanales. \ 
Ideal para compartir y descubrir nuevos sabores. Disponible en Núñez. Hacé tu pedido por WhatsApp.`

const DESCRIPCION_BOX_LJUBAV = "Una selección de nuestra pastelería. 16 mini brownies, 8 mini cookies y 12 alfajorcitos sableé.";

const METADESCRIPCION_BOX_LJUBAV = `Box Ljubav de pastelería artesanal con 16 mini brownies, 8 mini cookies y 12 alfajorcitos sableé. \ 
Ideal para regalar o compartir. Disponible en Núñez. Pedidos por WhatsApp.`

export const productos = [
  new Producto("brownie","Brownie",57990,"/imagenes/Brownie.webp", DESCRIPCION_BROWNIE,"Torta",null,METADESCRIPTION_BROWNIE),
  new Producto("vasca","Vasca",57990,"/imagenes/Vasca.webp", DESCRIPCION_VASCA,"Torta",null,METADESCRIPCION_VASCA), 
  new Producto("vasca-key-lime","Vasca Key Lime",59850,"/imagenes/Vasca_key_lime.webp",DESCRIPCION_VASCA_KEY_LIME,"Torta",null,METADESCRIPCION_VASCA_KEY_LIME),
  new Producto("torta-cumple","Torta Cumple",58550,"/imagenes/torta_cumple.webp",DESCRIPCION_TORTA_CUMPLE,"Torta",null,METADESCRIPCION_TORTA_CUMPLE),
  new Producto("box-lingotes","Box Lingotes",52190,"/imagenes/Box_mini_cakes.webp",DESCRIPCION_BOX_LINGOTES,null,null,METADESCRIPCION_BOX_LINGOTES),
  new Producto("box-ljubav","Box Ljubav",57890,"/imagenes/box_ljubav.webp",DESCRIPCION_BOX_LJUBAV,null,null,METADESCRIPCION_BOX_LJUBAV)
];