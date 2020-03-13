let { OrderArray } = require('./OrderArray')
let { Tabuleiro } = require('./Tabuleiro')

let estados = new OrderArray()
let hashs = new Set()



let inicial = new Tabuleiro()
estados.add(inicial)

let estdAval;


while(true){
    estdAval = estados.remove()
    
    if(estdAval.ataques() <= 0){
        break;
    }

    estdAval.moves().forEach(el=> {
        //if(!el.hash() in hashs){
            estados.add(el)
        //}
        hashs.add(el.hash())
    });


    
}

estdAval.form()

estdAval.table()

