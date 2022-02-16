# js_basics

Repositorio con ejercicios básicos de js

# 0. Introducción

## 0.1. JS Golden Rules ✅

1. Las instrucciones en Javascript deben terminan en punto y coma. (Aunque no es obligatorio)
2. Uso de decimales en Javascript. Los números en Javascript que tengan decimales utilizarán el punto como separador de las unidades con la parte decimal.
3. Los literales se pueden escribir entre comillas dobles o simples.
4. Cuando sea necesario declarar una variable, se utilizará la palabra reservada var.
5. El operador de asignación, al igual que en la mayoría de lenguajes es el símbolo igual (=).
6. Se pueden utilizar los siguientes operadores aritméticos: + - \* /
7. En las expresiones, también se pueden utilizar variables.
8. Comentarios en Javascript. Existen dos maneras de comentar código:
    - // cuando se desea comentar el resto de la línea a partir de estas dos barras invertidas.
    - /_ y _/, todo lo contenido entre ambas etiquetas quedará comentado.
9. Los identificadores en Javascript comienzan por una letra o la barra baja (\_) o el símbolo del dólar ($).
10. Javascript es sensible a las mayúsculas y las minúsculas (case-sensitive)

## 0.2. Introducción a los tipos de datos en JS

En javascript, al igual que en muchos lenguajes de programación, los diferentes tipos de datos primitivos son los siguientes:

-   **String**: son cadenas de de uno o varios caracteres. Pueden ir con espacios y siempre entre comillas simples o dobles. Ej: `"Esto es un string"`
-   **Number**: a su vez se pueden dividir en:
    -   **Integers**: números enteros
    -   **Float**: numeros decimales, el decimal es necesario indicarlo con el punto. Ej: `23.64`
-   **Boolean**: pueden tener dos valores `true` o `false`
-   **undefined**: si no se le asigna un valor a una variable, javascript devuelve que el valor no está definido.
-   **Null**: si una variable se le ha asignado un valor, pero vacío, js lo va a reconocer como un dato de tipo null

## 0.3. Variables y constantes

Existen 3 palabras reservadas en javascript para asignar un valor a un espacio de memoria:

1. **const**: permite almacenar un valor constante, inmutable. Por convención se suele escribir con todo letras mayúsculas (uppercase)
1. **var**: sirve para declarar variables con ámbito o scope local en el archivo donde se haya creado.
1. **let**: similar a `var`, pero su ámbito se limitará dentro del bloque de código en el que se haya declarado.

Ejemplos:

```js
var variable = "Esto está afuera del bloque";

if (true) {
    var variable = "Esto está dentro del bloque";
    console.log(variable); // 👉 Esto está dentro del bloque
}

console.log(variable); // 👉 Esto está dentro del bloque
```

```js
let variable = "Esto está fuera del bloque";

if (true) {
    let variable = "Esto está dentro del bloque";
    console.log(variable); // 👉 Esto está dentro del bloque
}

console.log(variable); // 👉 Esto está fuera del bloque
```

Los nombres de las variables deben de cumplir lo siguiente:

-   no deben de empezar con un número.
-   no debe de contener caracteres especiales quitando el símbolo del dolar y el de la barra baja
-   suelen seguir la convención camelCase
-   no debe de contener espacios entre palabras

Nombres válidos de variables en js:

```js
firstName;
lastName;
country;
city;
capitalCity;
age;
isMarried;

first_name;
last_name;
is_married;
capital_city;

num1;
num_1;
_num_1;
$num1;
year2020;
year_2020;
```

## 0.4. Comentarios

En javascript se pueden dejar comentarios en linea o comentarios de bloque

```js
//esto es un comentario en linea
```

```js
/*
Esto es un comentario
de varias líneas
*/
```

# 1. Tipos de datos

## 1.1 Introducción

En JavaScript existen dos grandes grupos de tipos de datos: los primitivos y los no primitivos

#### Primitivos

1. Numbers - Integers, floats
1. Strings - Any data under single quote, double quote or backtick quote
1. Booleans - true or false value
1. Null - empty value or no value
1. Undefined - a declared variable without a value

#### No primitivos

1. Arrays
1. Objects
1. Functions

## 1.2 Numbers

Métodos propios de los datos de tipo number:

### Métodos básicos

-   Suma(+): a + b
-   Resta(-): a - b
-   Multiplicación(_): a _ b
-   División(/): a / b
-   Módulo(%): a % b
-   Potencia(**): a ** b

### Métodos avanzados

## 1.3 Strings

### Métodos básicos

### Métodos avanzados
