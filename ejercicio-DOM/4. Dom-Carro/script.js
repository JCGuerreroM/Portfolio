// Selección de elementos
const redColor = document.querySelector(".red");
const grayColor = document.querySelector(".gray");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const cartButton = document.getElementById("button");
const feedbackBtn = document.querySelector(".feedback");
const itemTag = document.querySelector(".tag");

// Cambiar a Rojo
redColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")';
});

// Cambiar a Gris
grayColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
});

// Cambiar a Negro
blackColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")';
});

// Lógica del botón de compra (Feedback)
cartButton.addEventListener("click", () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
});

// Revertir si se hace clic en el mensaje
feedbackBtn.addEventListener("click", () => {
    feedbackBtn.style.display = "none";
    cartButton.style.display = "flex";
});