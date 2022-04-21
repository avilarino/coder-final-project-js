

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

  addEventListener("click", function(event){
    event.preventDefault()
  });

  let nombreWatch = document.getElementById("product-1").value
  let precioWatch = document.getElementById("price-product-1").value
  let sizeWatch = document.getElementById("size").value
  let stockWatch = document.getElementById("stock").value
  let colorWatch = document.getElementById("color-product").value
  let discount = document.getElementById("discount").value

    if (discount != "CODER"){
      console.log(`el código de descuento es incorrecto`)
      console.log(`el total a pagar es ${precioWatch * stockWatch}`)
    } else  {
      let total = (precioWatch - ((precioWatch*10)/100))* stockWatch
      console.log(`el precio a pagar con descuento es ${total}`)
    }

  let Envio1 = new Compra(nombreWatch, precioWatch, sizeWatch,colorWatch,stockWatch)
  carrito.push(Envio1)
  console.log(carrito)

}

const productCart = document.querySelector("#new-product")








// navbar ---------------------------------------

const navbar = document.getElementById("navbar");
const logo = document.querySelector(".logo_app")


window.onscroll = function(){
  const top = window.scrollY;

  if(top >= 100){
    navbar.classList.add("c-grey");
    logo.classList.add("c-white")


  } else {
    navbar.classList.remove("c-grey");
    logo.classList.remove("c-white");
  }
}





