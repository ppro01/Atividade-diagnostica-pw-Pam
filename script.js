var radio1 = document.querySelector("#label1");
var radio2 = document.querySelector("#label2");
var radio3 = document.querySelector("#label3");
var radio4 = document.querySelector("#label4");
var texto = document.querySelector("#Text");
var titulo = document.querySelector("#titulo");
var btnCarrinho = document.querySelector("#ativar");
var modalCompra = document.querySelector(".modal");
var POSITION = document.querySelector(".lista");

radio1.addEventListener("click", function () {
  titulo.style.backgroundImage = "url(sources/Shrek1.png)";
  texto.innerText =
    '"Shrek" é uma animação da DreamWorks que segue a jornada de um ogro solitário que, com a ajuda do Burro, resgata a princesa Fiona de uma torre guardada por um dragão para Lord Farquaad. Uma comédia encantadora sobre aceitação e amor verdadeiro.';
});
radio2.addEventListener("click", function () {
  titulo.style.backgroundImage = "url(sources/Shrek2.png)";
  texto.innerText =
    '"Shrek 2" continua a história do ogro Shrek e da princesa Fiona, que enfrentam desafios ao visitar os pais dela no reino de Muito, Muito Distante. Uma aventura repleta de humor, romance e lições sobre autoaceitação e família.';
});
radio3.addEventListener("click", function () {
  titulo.style.backgroundImage = "url(sources/Shrek3.png)";
  texto.innerText =
    '"Shrek Terceiro" mostra Shrek herdar o trono de Muito, Muito Distante, mas ele prefere encontrar o verdadeiro herdeiro, Artie. Enquanto isso, Fiona lidera uma rebelião das princesas. Uma jornada de autoconhecimento e amizade.';
});
radio4.addEventListener("click", function () {
  titulo.style.backgroundImage = "url(sources/Shrek4.png)";
  texto.innerText =
    'Em "Shrek para Sempre", Shrek se vê em uma realidade alternativa onde ele nunca existiu. Ele deve recuperar Fiona e o amor de seus amigos. Uma história sobre valorizar o que se tem e o verdadeiro significado da felicidade.';
});

btnCarrinho.addEventListener("click", function () {
  modalCompra.classList.add("active");
});
function openModal() {
  modalCompra.classList.add("active");
}
function closeModal() {
  modalCompra.classList.remove("active");
}
