

// entregable clase 8 documentById - Agustin Vilariño

class Usuario  {
  constructor(mail){
    this.mail = mail;
  }
}

const newsLetter = []

const usuariosMails = () => {
  let nombreMail = document.getElementById("email").value
  let usuario1 = new Usuario(nombreMail)
  newsLetter.push(usuario1);
  console.log(newsLetter)
  
}


class Compra   {
  constructor(nombre,precio,size,color,stock,code){
    this.nombre = nombre;
    this.precio = precio
    this.size = size;
    this.color = color;
    this.stock = stock;
    this.code = code
  }
}

const carrito = []

const sendToCart = () => {
  let nombreWatch = document.getElementById("product-1").value
  let precioWatch = document.getElementById("price-product-1").value
  let sizeWatch = document.getElementById("size").value
  let stockWatch = document.getElementById("stock").value
  let colorWatch = document.getElementById("color-product").value
  let discount = document.getElementById("discount").value

    if (code != "CODER"){
      console.log(`el código de descuento es incorrecto`)
      console.log(`el total a pagar es ${precioWatch}`)
    } else if (discount === "CODER") {
      total = (precioWatch * 10) % 100
      final = precioWatch - total;
      console.log(`el precio a pagar con descuento es ${final}`)

    }

  let Envio1 = new Compra(nombreWatch, precioWatch, sizeWatch,colorWatch,stockWatch)
  carrito.push(Envio1)
  console.log(carrito)

}





