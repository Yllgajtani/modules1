function shto(a , b){
    return a+b;
}

function zbatoOpracionin(a, b, operaconi){
    if(operaconi === 'shto'){
        return shto(a , b)
    }
}

module.exports = {
    shto ,
    zbatoOpracionin
}