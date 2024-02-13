function atualizaRelogio(){
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2,0);
    const minutos = agora.getMinutes().toString().padStart(2,0);
    const segundos = agora.getSeconds().toString().padStart(2,0);
    const timeString = `${horas}:${minutos}:${segundos}`
    document.getElementById("relogio").textContent = timeString;
   
    /* reogio de 12 horas

    let horas = agora.getHours();
    let meioDia = horas >= 12 ? "pm" : "am"
    horas = horas % 12 || 12;
    horas = horas.toString().padStart(2,0)  
    
    
    **/
}

atualizaRelogio();
setInterval(atualizaRelogio, 1000)
    