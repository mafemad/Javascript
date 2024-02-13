const min = 1;
const max = 100;
const resposta = Math.floor(Math.random() * (max - min + 1)) + min;

let tentativas = 0;
let chute;
let rodando = true;

while(rodando){

     chute = Number(window.prompt(`advinhe o numero entre ${min} - ${max}`));
     
     if(isNaN(chute)){
        window.alert("por favor insira um número valido");
     }
     else if (chute < min || chute > max){
        window.alert("por favor insira um número valido");
     }
     else{
        tentativas++;
        
        if(chute < resposta){
            window.alert("muito baixo! Tente novamente");
        }
        else if(chute > resposta){
            window.alert("muito alto! Tente novamente");
        }
        else{
            window.alert(`Brabo! a resposta era ${resposta}, voce tentou ${tentativas} vezes`);
            rodando = false;
        }

     }

    
}