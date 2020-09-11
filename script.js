document.getElementById("add").onclick  = function() {

    var li = document.createElement("Li");
    var texto = document.getElementById("hobbieUsuario").value; 
    var textnode = document.createTextNode(texto);
    li.appendChild(textnode);
    document.getElementById("listaHobbies").appendChild(li);
}

document.getElementById("add2").onclick  = function() {

    var li = document.createElement("Li");
    var texto = document.getElementById("perguntaUsuario").value; 
    var textnode = document.createTextNode(texto);
    li.appendChild(textnode);
    document.getElementById("listaPerguntas").appendChild(li);
}