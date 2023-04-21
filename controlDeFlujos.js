function viajar(destino){
    if (destino === "Brasil"){
        console.log("Gire a la IZQUIERDA")
    } else if (destino === "Argentina") {
        console.log("Gire a la DERECHA")
    } else {
        console.log("Nos perdimos!!")
    }
}

viajar("Ecuador");

// Prueba

function comprar(objeto){
    if (objeto === "Mouse"){
        console.log("Son $5000")
    } else if (objeto === "Teclado"){
        console.log("Son $10000")
    } else {
        console.log("No tenemos Stock")
    }
}

comprar("Monitor");

function puedeManejar (edad) {
    if (edad >= 18) {
        console.log(true)
    } else {
        console.log(false)
    }
}

puedeManejar(9);
