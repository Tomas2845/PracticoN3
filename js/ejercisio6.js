const ladoa = parseInt(prompt("ingrese el primer valor del lado A del rectangulo"));
const ladob = parseInt(prompt("ingrese el primer valor del lado B del rectangulo"));

function perimetro(ladoa,ladob) 
{
    let resultado =  2 *(ladoa + ladob);
    document.write("El perimetro del rectangulo es: " + resultado )
}

perimetro(ladoa,ladob)