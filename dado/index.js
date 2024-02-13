function rolarDados(){
    const numeroDados = document.getElementById("numero").value;
    const resultado = document.getElementById("resultados");
    const imagensDado = document.getElementById("imagens");
    const valores = [];
    const imagens = [];

    for(let i = 0; i < numeroDados; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        valores.push(value);
        imagens.push(`<img src="images/dado-${value}.png" alt="Dado:${value}">`);

    }
    
    resultado.textContent = `dado: ${valores.join(', ')}`;
    imagensDado.innerHTML = imagens.join("");


}