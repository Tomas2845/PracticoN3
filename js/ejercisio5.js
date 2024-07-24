const ladoa = prompt("ingrese el primer valor del lado A del rectangulo")
const ladob = prompt("ingrese el primer valor del lado B del rectangulo")

function perimeto(ladoa,ladob) 
{
 const resultado = 2*(ladoa +ladob);
 document.write("El perimeto del rectangulo es: " + resultado )
 return resultado;
}