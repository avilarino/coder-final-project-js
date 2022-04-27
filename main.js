
// entregable clase 8 documentById - Agustin Vilariño

class Usuario  {
  constructor(correo){
    this.correo = correo;
  }
}

const newsLetter = []


const usuariosMails = (correo) => {

  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  let valido = expReg.test(correo)



  if(valido == true) {
    newsLetter.push(correo)
    localStorage.setItem("ingreso", JSON.stringify(correo))
    
    
    swal("Registrado", "You`ll get your email the next month", "success")
  } else {
    swal("Error", "Try again please !", "error"
    
    )
  }

}

const user = JSON.parse(localStorage.getItem("ingreso"))
console.log(user)

const userMail = document.getElementById("user-mail")
userMail.append(user)

/// carrito !!!!


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
  

  const productCart = document.getElementById("new-product")


  let total = 0


    if (discount != "CODER" ){ 
    
      total = (`precio: ${precioWatch * stockWatch}`)
      productCart.append(`${nombreWatch} - $${total}`)
      console.log(total)

    } else {
      let valor = (precioWatch - ((precioWatch*10)/100))* stockWatch
      productCart.append(`${nombreWatch} - precio: $${valor}`)
      console.log(valor)

    } 


  let Envio1 = new Compra(nombreWatch, precioWatch, sizeWatch,colorWatch,stockWatch)
  carrito.push(Envio1)
  console.log(carrito)


}

  




// navbar ---------------------------------------

const navbar = document.getElementById("navbar");


window.onscroll = function(){
  const top = window.scrollY;

  if(top >= 100){
    navbar.classList.add("bg-black");



  } else {
    navbar.classList.remove("bg-black");

  }
}


// buscador !!!

document.addEventListener("keyup", e=>{

  if (e.target.matches("#search")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".articulo").forEach(local =>{

          local.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?local.classList.remove("filtro")
            :local.classList.add("filtro")
      })

  }


})


