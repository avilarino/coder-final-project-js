let stockProductos = [
  {
    "id": 1,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-5.png",
  },
  {
    "id": 2,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-6.png",
  },
  {
    "id": 3,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-3.png",
  },
  {
    "id": 4,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-4.png",
  },
  {
    "id": 5,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-5.png",
  },
  {
    "id": 6,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-6.png",
  },
  {
    "id": 7,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-7.png",
  },
  {
    "id": 8,
    "price": 200,
    "name": "apple-watch",
    "img": "./assets/images/showcase-8.png", 
  }
  
]

const path = './assets/images'

const containerShop = document.getElementById('container_shop')
const containerCart = document.getElementById('container_cart')
const btnDeleteAll = document.getElementById('delete-all-cart')


let carrito = []


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

  const item = stockProductos.find((product) => product.id === product.id)
  carrito.push(item)
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

}


































