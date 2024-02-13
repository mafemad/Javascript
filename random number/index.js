const botao = document.getElementById("botao");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

botao.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max)) + min;
    randomNum2 = Math.floor(Math.random() * (max)) + min;
    randomNum3 = Math.floor(Math.random() * (max)) + min;
    label1.textContent = "numero sorteado:" + randomNum1;
    label2.textContent = "numero sorteado:" + randomNum2;
    label3.textContent = "numero sorteado:" + randomNum3;
}