
// Get the modal
let modal = document.querySelector(".myModal");
let btn = document.querySelectorAll(".myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.forEach(boton => {
    boton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  })


span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





