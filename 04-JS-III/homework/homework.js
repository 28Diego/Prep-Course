// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  elemento1 = array;
  return elemento1[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  elementofin = array;
  return elementofin[elementofin.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largoarray = array;
  return largoarray.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrai = []; // con .push puedo agregar cada elemento nuevo al array vacio

  let incrementauno = array;
   for (let i = 0; i < array.length; i++){ 
      arrai.push(incrementauno[i] + 1);
    }
    return arrai;
}

//for(i = 0;i < num.length; i++){
  //... console.log(num[i] + 1);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    agregar = elemento;
    list = array;
      list.push(agregar);
      return list;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
    agregar = elemento;
    list = array;
      list.unshift(agregar);
      return list;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!' --//.join(" ") es un separador de string 
  // Tu código:
    f = []
    frase = palabras;
    if (frase.length < 2) return frase[0];
    for(let i = 0; i<frase.length; i++){
      f = frase[0]+ " " + frase[1] + " " + frase[2];
    }
    return  f;    
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    lista1 = array;
    lista2 = elemento;
    //c = a.indexOf(b);  //    indexOf = realiza una busqueda de una lista a otra  
      if( lista1.indexOf(lista2) > -1) {return true;   // si el resultado de la busqueda da -1 es porque no hay resultado similares
      }else return false;
      ///// como lo hizo henry
      /// for (let i=0; i< array.length; i++){
      ///   if(array[i]===elemento){return true;
      ///} }
      // return false
    }


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  
  f = 0;
  //if (suma.length < 2) return frase[0];  ///////////////////////////////
  for(let i = 0; i < numeros.length; i++){
    f += numeros[i];
    //return f;
  }
  return  f; 
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  numeros = resultadosTest;
  f = 0;
      for(let i = 0; i < resultadosTest.length; i++){
    f += numeros[i];
    }
      return  f/resultadosTest.length; 
  // para realizar el entero usar math
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

     var comparador = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > comparador)
          comparador = numeros[i];
        }
        return comparador;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //array = Array.isArray(arguments);
  if (arguments.length === 0) return 0;
  
  var f = 1;
  for(let i = 0; i < arguments.length; i++){
        f = f * arguments[i]; // en node si me funciona
      // return f ;
    }
  return  f;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  //var f = 0;
    //for (let i = 0; i < arreglo.length; i++) {
      //f = arreglo.length[i] > 18;
             // return f
    //}
     // return f;
  // HENRY ///es acumulador!!
  var f = 0;
    for (let i = 0; i < arreglo.length; i++) {
      if(arreglo[i] > 18) 
      f = f + 1;
    }
    return f;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  switch (numeroDeDia) {
    case 1: //domingo
    case 7: //sabado
        return "Es fin de semana"
    case 2: //lunes
    case 3: //martes
    case 4: //miercoles
    case 5: //jueves
    case 6: //viernes
        return "Es dia Laboral"
   }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
 
  if(n >= 9) return true;
  else return false;
  // henry
  //var j = n.toString();  --- .toString() convierte un numero a un string(leerlo como letra)
  //return j[0] === "9"
  // otra manera
  // return n.toString()[0] === "9"
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

    //if(arreglo = !arreglo) return false;
    //if(arreglo.includes(arreglo)) {return true;  //Array.prototype.includes() ----Determina si el array contiene el valorBuscado y devuelve true o false según sea el caso.
   // }else return false;
  // henry
     var f = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
      if(arreglo[i] !== f) 
      return false
    }
    return true;
}    


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
    //kk = array
    //var mes3 = [];
   // if(kk.indexOf(["Enero","Marzo","Noviembre"])) {return mes3 }
    //else return "No se encontraron los meses pedidos"
// henry
      var f = [];
      for (let i = 0; i < array.length; i++) {
        if(array[i] === "Enero"|| array[i] === "Marzo"|| array[i] === "Noviembre") f.push(array[i])
      }
      if (f.length !== 3) return "No se encontraron los meses pedidos"

      return f;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var mayorcien = []
for (i=0; i < array.length ; i++){
    if (array[i] > 100) mayorcien.push(array[i])
}
return mayorcien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var nuevoarrai = [];
  var iteraciones = numero;
  var j = 0;
  for (i=0; i < 10; i++ ) {
      j = i;
      if(i === iteraciones) break; //return "Se interrumpió la ejecución";

    iteraciones = iteraciones + 2;
    nuevoarrai.push(iteraciones);
  }
  if(j == iteraciones) return "Se interrumpió la ejecución";
  return nuevoarrai;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var nuevoarrai = [];
  iteraciones = numero;

      for (i=0; i < 10; i++ ) {
        if(i === 5){
          continue
        };

        iteraciones = iteraciones +2;
        nuevoarrai.push(iteraciones);
      }
      return nuevoarrai;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
