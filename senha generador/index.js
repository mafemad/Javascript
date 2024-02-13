const tamanhosenha = document.getElementById("tamanho");
const minuscula = document.getElementById("minuscula");
const maiuscula = document.getElementById("maiuscula");
const numero =  document.getElementById("numeros");
const simbalo = document.getElementById("simbolos");

const senhaf = document.getElementById("senha");

function gerar_senha(tamanhosenha, minuscula, maiuscula, numero, simbalo ){

    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "1234567890";
    const simbolos = "!@#$%&*+_-";

    let caracteres = "";
    let senha = "";


    
    caracteres += minuscula.checked ? minusculas : "";
    caracteres += maiuscula.checked ? maiusculas : "";
    caracteres += numero.checked ? numeros : "";
    caracteres += simbalo.checked ? simbolos : "";

    if(Number(tamanhosenha.value) <= 0){
        return "tamanho da senha tem que ser maior que zero"
    }
    if(caracteres.length === 0){
        return "pelo menos um dos parâmetros tem que ser atendido"
    }

    for(let i = 0; i < Number(tamanhosenha.value); i++){
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[index];

    }


    return senha;
}

function manda_senha(){
    const senha = gerar_senha(tamanhosenha, minuscula, maiuscula, numero, simbalo);
    tamanhosenha.value = "";
    minuscula.checked = false;
    maiuscula.checked = false;
    numero.checked = false;
    simbalo.checked = false;

    
    senhaf.textContent = `Sua senha gerada: ${senha}`;
}

