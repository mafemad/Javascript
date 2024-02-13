const diminuir = document.getElementById("menos");
const aumentar = document.getElementById("mais");
const zerar = document.getElementById("zerar");
const contador = document.getElementById("contador");
let cont = 0;

aumentar.onclick = function(){
    cont ++;
    contador.textContent = cont;
}

diminuir.onclick = function(){
    cont --;
    contador.textContent = cont;
}

zerar.onclick = function(){
    cont = 0;
    contador.textContent = cont;
}