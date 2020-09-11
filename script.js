document.getElementById("add").onclick  = function() {

    var node = document.createElement("UL");
    var text = document.getElementById("hobbieUsuario").nodeValue; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("listaHobbies").appendChild("LI");
}