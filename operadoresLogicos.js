// && and

function mayorYMenorYPar(num){
    if(num > 5 && num < 10 && num % 2 === 0 )console.log(true);
    else console.log(false);

}

// mayorYMenorYPar(8);
// mayorYMenorYPar(7); 

// || or

function operadorOr(str){
    if(str === 'Henry' || str.length<2) console.log(true);
    else console.log(false);
} 

// operadorOr('JavaScript');
 
function negacion(permiso){
    if(permiso !== true) console.log('Tiene permiso')

};

// negacion(false)

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

