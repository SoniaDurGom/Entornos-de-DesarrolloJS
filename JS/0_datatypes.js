console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

//Crear una variable para almacenar tu nombre
var nombre= "Sonia"; 
//Crear una variable para almacenar tus apellidos
var apellidos= "Durán Gómez";
//Crear una variable para almacenar tu edad
var edad= 24; 
//console.log(nombre+edad+edad);

//Almacenar en una constante tu nombre y apellidos
//const NOM_COMPLETO= nombre+ " " +apellidos; //ERROR

//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
//console.log("Hola, mi nombre es: " + NOM_COMPLETO);
//console.log('Hola, mi nombre es:  ${NOM_COMPLETO}'); //Error

//Muestra por pantalla el valor de una constante vacía
const VACIO= null;
console.log(VACIO);

//Muestra por pantalla el valor de una constante sin definir. 
//console.log(noExiste);

//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla. TypeError
//NOM_COMPLETO= "Nombre Distinto";
//console.log(NOM_COMPLETO);

//Comprueba el tipo de dato de la variable con tu edad
console.log(typeof(edad));

//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorEdad=false;
if (edad >=18){
    let mayorEdad=true; //Con let no se sobrescribe el valor. con var si
}
console.log(mayorEdad)

if(mayorEdad==true){
    console.log("Se muestra " + mayorEdad+ " porque la persona es mayor de 18 años");
}else{
    console.log("Se muestra " + mayorEdad+ " porque la persona es menor de 18 años");
}

//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mayorEdad2=false;
if (edad >=18){
    var mayorEdad2=true; //Cn var se sobrescribe el valor ccon let no
}
console.log(mayorEdad2)
if(mayorEdad2==true){
    console.log("Se muestra " + mayorEdad2+ " porque la persona es mayor de 18 años");
}else{
    console.log("Se muestra " + mayorEdad2+ " porque la persona es menor de 18 años");
}

//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var num1=4;
var num2=10;

console.log("La suma de "+num1+"+"+num2+"="+(num1+num2));
console.log("La resta de "+num1+"-"+num2+"="+(num1-num2));
console.log("La multiplicacion de "+num1+"*"+num2+"="+(num1*num2));
console.log("La division de "+num1+"/"+num2+"="+(num1/num2));

//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
const operaciones= ['+','-', '*','/'];
//operaciones.forEach(element => console.log(num1+ element +num2+"="));
var resutado="";
for (elemento of operaciones) { //FOR EACH !
    switch (elemento) {
        case '+':
            resultado= "La suma de "+num1+"+"+num2+" es "+(num1+num2);
        break;

        case '-':
            resultado="La resta de "+num1+"-"+num2+" es "+(num1-num2);
        break;

        case '*':       
            resultado="La multiplicacion de "+num1+"*"+num2+" es "+(num1*num2);
        break;

        case '/':
            resultado="La division de "+num1+"/"+num2+" es "+(num1/num2);
        break;
    
        default:
            break;
    }
    console.log(resultado);
    
}

//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
//B*A/2
var base=12;
var altura=6;
console.log("El area del triangulo es: "+(base*altura)/2);

//Calcular el área de una circunferencia para un radio dado
//Pi * r2
var radio= 12 ;
var area = Math.PI * (Math.pow(radio,2));
console.log("El area de una circunferencia con radio: "+ radio +" es "+ area);

//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
var masa= 80;
var altura=500;
const GRAVEDAD= 9.8;
var tiempo= Math.sqrt((2*altura)/GRAVEDAD);
console.log("El tiempo en caida libre del objeto con altura="+altura+" es: "+ tiempo);

//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
var diametroTierra=12742000; //KM
var diametroLuna=3478800;

var radioTierra=diametroTierra/2; //KM
var radioLuna=diametroLuna/2;
//VOlumen esfera= 4/3* πr³

var volumenTierra=((4/3)*Math.PI*(Math.pow(radioTierra,3)));
var volumenLuna=((4/3)*Math.PI*(Math.pow(radioLuna,3)));;

//Volumen de la tierra
console.log("El volumen de la tierra es: "+volumenTierra );
//Volumen de la luna
console.log("El volumen de la luna es: "+volumenLuna );
//La tierra es N veces mayor que la luna
console.log("La tierra es :"+ volumenTierra/volumenLuna +" mayor que la luna");