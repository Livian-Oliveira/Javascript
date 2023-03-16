function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat = fat * c     
    }
    return fat
}
let r = fatorial(10)
console.log(r)


