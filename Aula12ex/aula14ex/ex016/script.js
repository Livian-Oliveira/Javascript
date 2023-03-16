function contar(){
    var ini = document.getElementById('inc')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var txt = document.getElementById('txt')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        txt.innerHTML = 'Impossível contar!'
    } else {
        txt.innerHTML = 'Contando: <br> '
        var i =Number(ini.value)
        var f =Number(fim.value)
        var p =Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c<= f; c+= p) {
                txt.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (var c= i; c >= f; c-= p) {
                txt.innerHTML += ` ${c} \u{1F449}`
            }
        }
        txt.innerHTML += `\u{1F3c1}`
    }
// <br> para quebrar linha
}