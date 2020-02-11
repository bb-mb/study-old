function add_maker(a){
    return function(b){
        return(a+b)
    }
}

const add10 = add_maker(10)
console.log(add10(20))