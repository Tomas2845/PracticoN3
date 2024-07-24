const ladoa = prompt("ingrese el primer valor del lado A del rectangulo");
const ladob = prompt("ingrese el primer valor del lado B del rectangulo")

function perimetro(ladoa,ladob) 
{
    const resultado =  2* (ladoa + ladob)
    document.write("El perimetro del rectangulo es: " + resultado )
}

perimetro(ladoa,ladob)