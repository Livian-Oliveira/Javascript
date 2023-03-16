function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manhã.png'
        document.body.style.background = '#dedabb'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b15a17'
    } else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#415063'
    }
}