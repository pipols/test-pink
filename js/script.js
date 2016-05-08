var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var modalClose = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event){
    event.preventDefault();
    console.log("клик бля");
    popup.classList.add("modal-content-show");
});
modalClose.addEventListener("click", function(event){
    event.preventDefault();
    console.log("закрыл бля");
    popup.classList.remove("modal-content-show");
});
