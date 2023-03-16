function Tabuada(){
    var nml = document.getElementById('nml')
    var tab = document.getElementById('seltab')

    if( nml.value == 0){
        window.alert('ERRO digite um número')
    } else {
        var num = Number(nml.value)
        var c = 1
        while (c<=10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}

/*var num = 2
var c = 1
var tot = 0
while (c<=10){
    tot = num*c
    console.log(`2 x ${c} = ${tot}`)
    c++
}*/