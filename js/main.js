
// entregable clase 8 documentById - Agustin Vilariño

class Usuario  {
  constructor(correo){
    this.correo = correo;
  }
}

const newsLetter = []


const usuariosMails = (correo) => {

  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  
  let valido = (expReg.test(correo) && !null)

  if(valido == true) {
    newsLetter.push(correo)
    localStorage.setItem("ingreso", JSON.stringify(correo))
    
    
    swal("Registrado", "You`ll get your email the next month", "success")
  } else {
    swal("Error", "Try again please !", "error")
  }

}

const user = JSON.parse(localStorage.getItem("ingreso"))
console.log(user)

const userMail = document.getElementById("user-mail")
userMail.append(user)









// navbar ---------------------------------------

const navbar = document.getElementById("navbar");


window.onscroll = function(){
  const top = window.scrollY;

  if(top >= 100){
    navbar.classList.add("bg-black");
    navbar.style.opacity = 0.9
   

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


