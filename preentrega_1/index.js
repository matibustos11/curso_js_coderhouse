function adivinaElNumero() {

    const numeroObjetivo = Math.floor(Math.random()*100) + 1;
    let numero = null;
    let intentos = 0;

    while (numero !== numeroObjetivo) {
        numero = parseInt(prompt("Ingrese un número del 1 al 100: "), 10);
        intentos++;

        if (numero < numeroObjetivo){
            alert("El número es mas alto!");
        } else if (numero > numeroObjetivo){
            alert("El número es mas bajo!");
        } else if (numero === numeroObjetivo){
            alert("Felicidades! Encontraste el número en " + intentos + " intentos.");
        } else{
            alert("Ingrese un valor numérico entre 1 y 100");
        }
        
    }
    
}

adivinaElNumero();