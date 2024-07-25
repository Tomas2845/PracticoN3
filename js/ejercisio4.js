const numero1 = prompt('Ingrese un numero');

function primerafuncion(numero1){
  if (numero1 % 2 === 0) {
    document.write('<p>Su numero ingresado: ' + numero1 + ' es PAR </p>');
  } else {
    document.write('<p>Su numero ingresado: ' +  numero1 + ' es IMPAR </p>');
  }
}

primerafuncion(numero1)
