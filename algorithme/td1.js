let x = parseInt(prompt("Entrer la valeur de x"));
let y = parseInt(prompt("Entrer la valeur de y"));

document.write("valeurs de départ : " + x + " et " + y + "<br>");

x = x + y;
y = x - y;
x = x - y;

document.write("valeurs après traitement : " + x + " et " + y + "<br>");
