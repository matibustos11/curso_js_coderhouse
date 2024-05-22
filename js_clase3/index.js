        //?CICLO FOR

//   for (let i = 0 ; i < 10 ; i++) {          //!AUMENTA DE A 1 NUMERO
//     console.log (i);
//   }

//   for (let i = 0 ; i < 100 ; i+=5) {         //!AUMENTA DE A 5 NUMEROS
//     console.log (i);
//   }

// for (let i = 100 ; i >= 30; i--){           //!DISMINUYENDO DE A 1 NUMERO
//         console.log(i);
//   }

//? crea un algoritmo que reciba un numero y devuelva la tabla del 10 hasta esa cantidad

// const cantidad = prompt ("Ingrese la cantidad");

// for (let i=0 ; i <= cantidad ; i++){
//         console.log(i * 10);
// }


//?TURNERO

// for (let i = 1; i <= 5; i++) {
//     let nombre = prompt ("Ingrese su nombre");
//     console.log ("Hola " + nombre + ", usted tiene asignado el numero " + i);
// }


//?BREAK PARA CORTAR CICLOS

// for (let i = 1; i <= 5; i++) {
//     let nombre = prompt ("Ingrese su nombre");

//     if (nombre == "") {
//         console.log ("No dare mas turnos");
//         break;
//     }
//     console.log ("Hola " + nombre + ", usted tiene asignado el numero " + i);
// }


//?CONTINUE PARA CONTINUAR DONDE QUEDO EL CICLO

// for (let i = 1; i <= 5; i++) {
//     let nombre = prompt ("Ingrese su nombre");

//     if (nombre == "") {
//         console.log ("NO TE DARE TURNO POR NO PONER NOBRE");
//         i= i - 1 ;      //! acá, si no ponemos  i-1, salteará el numero donde quedo y continuará con el siguiente
//         continue;
//     }
//     console.log ("Hola " + nombre + ", usted tiene asignado el numero " + i);
// }


//?     CICLO WHILE

// let condition = true;

// while (condition) {
//     console.log("La condición es verdadera");
//     condition = 10 == 20;
// }

// let option;

// while (option != 0) {
//     option = prompt("Ingrese una opción; \n 1. Ver saldo \n 2. Extraer saldo \n 0. Salir");   //! \n sirve para salto de linea

//     if (option==1){
//         alert("Tu saldo es $ 1000 .-");
//     } else if (option ==2){
//         alert("Extrajiste toda la money");
//     } else if(option==0){
//         alert("Gracias vuelva prontos");
//     } else{
//         alert("Fijate que escribis menso");
//     }
// }

//?    CICLO DO WHILE

// let condition = false;

// do{
//     console.log("La condición es verdadera");
// } while (condition);


//?     SWITCH

//? Detector de Fauna

// let option ; 

// while (option !=0) {
//     let animal = prompt("Ingrese el animal que desea conocer su sonido, para salir ingrese salir");

//     switch(animal){
//         case "perro":
//             console.log("El perro hace guau guau");
//             break;
//         case "gato":
//             console.log("El gato hace miau miau");
//             break;
//         case "loro":
//             console.log("El loro imita sonidos");
//             break;
//         case "caballo":
//             console.log("El caballo relincha");
//             break;
//         case "salir":
//             console.log("Nos vemos la proxima, ANIMAL");
//             option = 0;
//             break;
//         default:
//             console.log("No conozco ese animal, o el valor ingresado no es  un animal");
//             break;
//     }
// }


//?   CAJERO AUTOMATICO

/**
 * 1. Ver saldo
 * 2. Ingresar dinero
 * 3. Retirar parcialmente dinero
 * 4. Retirar todo el dinero
 * 0. Opcion de salida
 */


let saldo = 0;

let option = prompt (`Ingrese una opción:
* 1. Ver saldo
* 2. Ingresar dinero
* 3. Retirar parcialmente dinero
* 4. Retirar todo el dinero
* 0. Opcion de salida
`);

switch (option){
    case "1":
        alert(saldo);
        break;
    case "2":
        const moneyIn = Number (prompt("Cuanto dinero desea ingresar"));
        saldo +=moneyIn;
        alert("Dinero ingresado con éxito, tu nuevo saldo es $"+ saldo);
        break;
    case "3":
        const moneyOutPartial = Number(prompt("Cuanto dinero desea retirar"));
        saldo -=moneyOutPartial;
        alert("Dinero retirado con éxito, su nuevo saldo es $"+ saldo);
        break;
    case "4":
        saldo = 0
        alert("Todo su dinero fue retirado su nuevo saldo es $"+ saldo);
        break;
    case "0":
        alert("Gracias, regrese prontito");
        break;
    default:
        alert("Ingrese una opción válida");
        break;
}