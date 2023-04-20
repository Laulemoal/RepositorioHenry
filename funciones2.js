function cuidadoconelconsolelog(nombre) {
    console.log(nombre); 
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoconelconsolelog' es: " +
        cuidadoconelconsolelog('Lautaro')
    );
}

function cuidadoconelreturn(nombre) {
    return nombre;
    console.log(nombre);
}