console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var num1 = 5;
var num2 = 5;
if(num1 == num2){ // true  //Comparacion normal, mira solo el valor
    console.log(num1 + " y " + num2 + " Son iguales.");
}else{
    console.log(num1 + " y " + num2 + "No son iguales");
}

console.log("-----EJ2-----");
//crear dos variables con el distinto contenido y comparar si ambas son iguales
var num3 = 9;
console.log("¿Son " +num1 + " y " + num3+" iguales? " + (num1 == num3));

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
console.log("-----EJ3-----");
var str="5";
var num4=5;
console.log("¿Son " +str + " y " + num4+" iguales? " + (str == num4));

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
console.log("----EJ4----");
console.log("¿Son " +str + " y " + num4+" iguales? " + (str === num4)); //comparacion estricta mira el valor y el tipo

//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
console.log("-----EJ5-----");
var frutas1 = ["Manzana", "Pera"];
var frutas2 = ["Manzana", "Pera"];
var frutas3 = ["Tomate", "Pera"];
var cont=0;

if(frutas1==frutas2){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

for (let index = 0; index < frutas1.length; index++) {
    console.log(frutas1[index]);
    if(frutas1[index]===frutas2[index]){
      cont++;
    }
}

if(cont>=2){
    console.log("SON IGUALES");
}else{
    console.log("NO SON IGUALES");
}

//O
console.log("-----EJ5:2.0-----");
var sonIguales=true
for (let index = 0; index < frutas1.length; index++) {
    //console.log(frutas1[index]);
    if(frutas1[index]!=frutas3[index]){
        sonIguales=false;
        break;
    }
}
console.log(sonIguales);



// crear un objeto "usuario", con tres propiedades
console.log("-----EJ6: Crear usuarios-----");
var usuario1 = {
    Nombre:"Mario",
    Edad: 20,
    Altura:1.80,}; //Crear objeto

var usuario2 = new Object(); //Otra manera de crear objeto
usuario2.nombre="Estela";
usuario2.Peso=70;
usuario2.altura=1.70;
usuario2.edad=25;

//Otra manera
const usuario3 ={
    prop1: "asdf",
    prop2: 123,
};

console.log(usuario1.Nombre);
console.log(usuario2.nombre);
console.log(usuario3.prop2);
usuario1.Edad=30;
console.log("La nueva edad es: "+ usuario1.Edad);

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
console.log("-----EJ7: Gravedad Round-----");
const GRAV = 9.81;
console.log("Gravedad: "+GRAV+ "Redondeo: "+Math.round(GRAV));

console.log("-----EJ8: Incremento de variable-----");
//incrementar una variable con otra variable con el operador  +=
console.log(num1+=num2);
num1-=num2;

console.log("-----EJ9: Elevar numero-----");
//eleva un número a otro utilizando **
console.log(num1 + "^" + num2 + "=" + (num1**num2));

//eleva un número a otro utilizando un bucle
console.log("-----EJ9 2.1: Usando un bucle-----");
var resultado=1;
for (let index = 0; index < num2; index++) {
    resultado = resultado*num1;
}
console.log(num1 + "^"+ num2+ "="+ resultado);

// generar un número aleatorio del 0 al 100
console.log("-----EJ10: Generar numeros aleatorios entre 0 y 100-----");
var aleatorio= (Math.random() * 101 + 0).toFixed(2);
console.log(aleatorio);

console.log("-----EJ11: Generar un array de 10 num aleatorios entre 0 y 100, sacando el maximo y el minimo-----");
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
var arrayNumAleatorio= new Array(10);
//var arrayNumAleatorio= []; //Lo crea vacio.
var max;
var min;
for (let index = 0; index < arrayNumAleatorio.length; index++) {
     arrayNumAleatorio[index]= (Math.random() * 101 + 0).toFixed(2);
     console.log(arrayNumAleatorio[index]);
     if(index==0){
         min=arrayNumAleatorio[index];
         max=arrayNumAleatorio[index];
     }
     if(max<arrayNumAleatorio[index]){
         max=arrayNumAleatorio[index];
     }

     if(min>arrayNumAleatorio[index]){
        min=arrayNumAleatorio[index];
    }
}
console.log("El numero más grande ha sido: "+ max + " El numero más pequeños ha sido: "+min);

console.log("-----EJ12: Generar un array de 10 num aleatorios entre 0 y 100 sacando el max y min con math.min y math.max----");
// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
var arrayNumAleatorio= new Array(10);
for (let index = 0; index < arrayNumAleatorio.length; index++) {
    arrayNumAleatorio[index]= (Math.random() * 101 + 0).toFixed(2);
    console.log( arrayNumAleatorio[index]);
}
var minimo= Math.min(...arrayNumAleatorio); //Sin los puntos suspensivos, devuelve NAN
var maximo= Math.max(...arrayNumAleatorio);
//var maximo= Math.max.apply(null,arrayNumAleatorio); //Otra manera
console.log("El numero más grande ha sido: "+ maximo + " El numero más pequeños ha sido: "+minimo);



console.log("----Operaciones con Strings----");
/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
console.log("----------EJ ToUpperCase y toLoweCase---------");
var cadena1= "Primera cadena de caracteres";
console.log(cadena1.toUpperCase());
console.log(cadena1.toLowerCase());

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
console.log("--------EJ replace------------");
var remplazo= "Pascal es un lenguaje de programación moderno. Pascal";
console.log(remplazo);
console.log(remplazo.replace("Pascal","JavaSacript")); //Solo funciona con el primer valor que coincide con el introducido
console.log(remplazo.replaceAll("Pascal","JavaSacript")); //Esta remplaza todos.

//crear una variable con frase/cadena de caracteres y comprobar la longitud
console.log("-------------EJ long()----------");
var long="Pascal es un lenguaje de programación moderno.";
console.log(long.length);

//eliminar "script" de la palabra Javascript con el método substr
console.log("-------EJ substring--------");
var long="JavaScript";
console.log(long.substring(0,4)); //substr a punto de estar obsoleto
var subs=long.replace(long.substring(4,10),"") //otra manera
console.log(subs)
//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
console.log("-------EJ: icludes ---------");
var contener= "Espero que esto me sirva para algo";
console.log(contener.includes("algo"));
