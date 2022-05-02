let stockProductos = [
  {
    "id": 1,
    "price": 100,
    "name": "Apple Smart - 1",
    "img": "./assets/images/showcase-5.png",
    "stock": 1
  },
  {
    "id": 2,
    "price": 200,
    "name": "Apple In - 2",
    "img": "./assets/images/showcase-6.png",
    "stock": 1

  },
  {
    "id": 3,
    "price": 300,
    "name": "Apple watch - 3",
    "img": "./assets/images/showcase-3.png",
    "stock": 1

  },
  {
    "id": 4,
    "price": 400,
    "name": "Apple pro - 4",
    "img": "./assets/images/showcase-4.png",
    "stock": 1

  },
  {
    "id": 5,
    "price": 500,
    "name": "Apple Impor - 5",
    "img": "./assets/images/showcase-5.png",
    "stock": 1

  },
  {
    "id": 6,
    "price": 600,
    "name": "Apple Go - 6",
    "img": "./assets/images/showcase-6.png",
    "stock": 1

  },
  {
    "id": 7,
    "price": 700,
    "name": "Apple true - 7",
    "img": "./assets/images/showcase-7.png",
    "stock": 1

  },
  {
    "id": 8,
    "price": 800,
    "name": "Apple magic - 8",
    "img": "./assets/images/showcase-8.png", 
    "stock": 1

  }
  
]


const containerShop = document.getElementById('container_shop')
const containerCart = document.getElementById('container_cart')
const btnDeleteAll = document.getElementById('delete-all-cart')
const counterCart = document.getElementById('counter-cart')
const totalPrice = document.getElementById('total-price-cart')


let carrito = []


document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      updateCart()
  }
})


btnDeleteAll.addEventListener('click', () => {
  carrito.length = 0
  updateCart()
})


stockProductos.forEach((product) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img class="image-galery" src= ${product.img} alt= "no-foto">
  <h6>${product.name}</h6>
  <p>$${product.price}</p>
  <button class="button-add-to-cart" id="agregar${product.id}">Add <i class="fas fa-shopping-cart"></i>+</button>
  `
  containerShop.appendChild(div)

  const boton = document.getElementById(`agregar${product.id}`)
   
    boton.addEventListener('click', () => {
        sendToCart(product.id)
        
    })
})


const sendToCart = (prodId) => {

  const existe = carrito.some (prod => prod.id === prodId)

  if (existe){ 
      const prod = carrito.map (prod => { 
         
          if (prod.id === prodId){
              prod.stock++
          }
      })
  } else { 
      const item = stockProductos.find((prod) => prod.id === prodId)
      carrito.push(item)
  }
  updateCart()
  console.log(carrito)
}




const deleteFromCart = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)

  const indice = carrito.indexOf(item) 

  carrito.splice(indice, 1) 
  updateCart() 
  console.log(carrito)
}


const updateCart = () => {

  containerCart.innerHTML = ""

  carrito.forEach((product) => {
    const div = document.createElement('div')
    div.className = ('productoEnCarrito')
    div.innerHTML = `
    <p>${product.name}</p>
    <p>Precio:$${product.price}</p>
    <p>Cantidad: <span id="cantidad">${product.stock}</span></p>
    <button onclick="deleteFromCart(${product.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `

    containerCart.appendChild(div)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))

  })
  
  counterCart.innerText = carrito.length
  counterCart.classList.add("c-yellow")
  totalPrice.innerText = carrito.reduce((acc, product) => acc + product.stock * product.price, 0)
  localStorage.setItem('carrito', JSON.stringify(carrito))

}


































