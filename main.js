let matriz = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

function sumaNumeros() {

  let sumatorioNumeros = 0;

  matriz.forEach(element => { //Con esto recorro el primer nivel (filas 0,1,2)
    element.forEach(num => { //Con esto recorro el segundo nivel (números)
      sumatorioNumeros += num;
    })
  })

  console.log("El total es " + sumatorioNumeros);

  /*1. Crear función
    2. Recorrer matriz
    3. Tengo que ir guardando en una variable la suma de recorrer las distintas posiciones de la matriz
    4. Finalmente puedo mostrar el valor por console.log o en un alert  
  */
}


function sumaDiagonal() {

  let sumatorioNumeros = 0;

  matriz.forEach((element, indexf) => { //Con esto recorro el primer nivel (filas 0,1,2)
    element.forEach((num, indexc) => { //Con esto recorro el segundo nivel (números)
      if (indexf == indexc) {
        sumatorioNumeros += num;
      }

    })
  })


  console.log("El resultado es " + sumatorioNumeros);
  return sumatorioNumeros;




}

function sumaDiagonalInversa() {
  //No lo voy a hacer con un foreach porque tengo que ponerle incremento y con el foreach no se puede

  let sumatorioNumeros = 0;

  for (let indexf = 0, indexc = 2; indexf < matriz.length; indexf++ , indexc--) {
    let numero = matriz[indexf][indexc];
    sumatorioNumeros += numero;
  }


  console.log("El resultado es " + sumatorioNumeros);
  return sumatorioNumeros;


}

function sumaDiagonales() {
  let resultadoDiagonal = sumaDiagonal();
  let resultadoDiagonalInversa = sumaDiagonalInversa();
  let resultadoSumaDiagonales = resultadoDiagonal + resultadoDiagonalInversa;

  console.log("El resultado es " + resultadoSumaDiagonales);
}

function sumaFilas() {
  let number = prompt("Inserta la fila que quieras sumar");

  if (isNaN(number)) {
    alert("Has de introducir un número")
  } else {
    number = parseInt(number); //Al ser de tipado dinámico, lo guardo parseado en otra variable de tipo number
    if (number >= matriz.length || number < 0) {
      alert("El número introducido no se corresponde con ninguna fila de la matriz, inténtalo de nuevo")
    } else {
      let array = matriz[number];
      let sumatorioNumeros = 0;
      array.forEach(numero => {
        sumatorioNumeros += numero;
      }); 
      console.log("El sumatorio de los números es " + sumatorioNumeros);
    }
  }


}

function sumaColumnas() {
  let number = prompt("Inserta la columnas que quieras sumar");

  if (isNaN(number)) {
    alert("Has de introducir un número")
  } else {
    number = parseInt(number); //Al ser de tipado dinámico, lo guardo parseado en otra variable de tipo number
    if (number >= matriz.length || number < 0) {
      alert("El número introducido no se corresponde con ninguna columna de la matriz, inténtalo de nuevo")
    } else {
      let array = matriz[number];
      let sumatorioNumeros = 0;
      for (let i = 0; i < matriz.length; i++) {
        let numero = matriz[i][number];
        sumatorioNumeros += numero;
      } 
      console.log("El sumatorio de los números es " + sumatorioNumeros);
    }
  }

 
}









