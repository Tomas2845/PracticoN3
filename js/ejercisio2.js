const paises = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto'];
document.write("El arreglo de ciudades tiene " + paises.length + " elementos");

paises.push("paris");


document.write("<li> Elemento 1er posicion: " + paises[0] +" </li>");
document.write("<li> Elemento 3er posicion: " + paises[2] + " </li>");
document.write("<li> Elemento ultima posicion: "  + paises[9] + " </li>");
document.write("<li> Elemento ultima posicion: " + paises[10] + " </li>");

document.write("<h2> Arreglo de ciudades </h2>");
document.write("<ul>");

paises.splice(1,0, "Barcelona");

for (i=0; i <paises.length; i++) 
    {
     document.write("<li> Elemento: " + paises[i] + "</li>");
    }
    document.write("</li>");

