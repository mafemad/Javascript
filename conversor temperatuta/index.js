const textbox = document.getElementById("textbox");
const fahernheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");
let temp;



function convert(){
    
    if(fahernheit.checked){

        temp = (Number(textbox.value) * 9)/5 + 32;
        result.textContent = temp.toFixed(1) + "f°"

    }
    else if (celsius.checked){
        
        temp = (Number(textbox.value) - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"

    }
    else{
        result.textContent = "selecione uma unidade";
    }
}