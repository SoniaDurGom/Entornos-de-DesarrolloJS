console.log("2.functions: 馃憢 Bienvenidos, en este fichero se har谩n ejercicios sobre las funciones en JS");

//Funci贸n saludar1, que muestre "Hola, " y un nombre.
console.log("--------------EJ:1---------------");
function saludar1(nombre) {
    console.log("Hola, "+ nombre);
}
saludar1("Sonia");

//Funci贸n saludar2 que devuelva "Hola, " y un nombre.
console.log("--------------EJ:2---------------");
function saludar2(nombre) {
    return ("Hola, " + nombre);
}
console.log(saludar2("Sonia"));


//Funci贸n saludar3 igual que la anterior, pero que, en caso de no recibir nombre, devolver "Hola, an贸nimo".
console.log("--------------EJ:3---------------");
var nombre= prompt("驴Nombre?","");
function saludar3(nombre) {
    if(nombre==""){
        return "Hola, an贸nimo";
    }else{
        return"Hola, "+ nombre;
    }
}
console.log(saludar3(nombre));

//Escribir la funci贸n saludar2 con la sintaxis de las funciones flecha
//(nombre) => { return ("Hola, "+nombre)};
//(nombre) => "Hola, "+nombre;
var nomb = (nombre) => "Hola, "+nombre;
console.log(nomb("Sonia"));


//Funci贸n que reciba un array y lo devuelva en orden inverso
console.log("--------------EJ:4---------------");
function invertir(array) {
    console.log('array:', array);

    const reversed = array.reverse();
    console.log('reversed:', reversed);

    return reversed;
}
array1 = ['one', 'two', 'three'];
invertir(array1);

//Funci贸n que cifre un mensaje utilizando el cifrado C茅sar con el algoritmo ROT13
console.log("--------------EJ:5---------------");
function rot13(string) {
    return string.replace(/[A-Z]/gi, c =>
      "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
  }
console.log(rot13("Hola Mundo"));


//Funci贸n que reciba dos n煤meros y los mezcle. Ej. mezclar (12,34) => //devuelve 1324
console.log("--------------EJ:6---------------");
var num1='12';  
var num2='34';
function mezcla(num1,num2){
    //var aux= num1+num2;
    //var prueba= aux.replace(aux.substring(1,3),(num2.charAt(0)+num1.charAt(1)));
    //return prueba;
    return num1.charAt(0)+num2.charAt(0)+num1.charAt(1)+num2.charAt(1)
    
}
//console.log(num1.charAt(0)+num2.charAt(0)+num1.charAt(1)+num2.charAt(1));
console.log(mezcla(num1,num2));