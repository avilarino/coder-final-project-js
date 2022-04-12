class Usuario  {
  constructor(mail){
    this.mail = mail;
  }
}

const newsLetter = []

const usuariosMails = () => {
  let nombreMail = prompt("cual es tu mail")
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
  let nombreWatch = prompt("¿Cúal es el nombre del reloj?")
  let precioWatch = parseInt(prompt("¿Cúal es el precio del reloj?"))
  let sizeWatch = prompt("¿Cúal es el size del reloj?")
  let colorWatch = prompt("¿De qué color es el reloj?")
  let stockWatch = prompt("¿Qué cantidad?")
  let code = prompt("¿tenes código de descuento?");

  
    if (code === "CODER"){
      total = (precioWatch * 10) % 100
      final = precioWatch - total;
      alert(`el precio a pagar con descuento es ${final}`)
    } else if (code != "CODER") {
      alert(`el código de descuento es incorrecto`)
      alert(`el total a pagar es ${precioWatch}`)
    } 


  let Envio1 = new Compra(nombreWatch, precioWatch, sizeWatch,colorWatch,stockWatch)
  carrito.push(Envio1)
  console.log(carrito)

}





