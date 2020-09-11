document.getElementById("add").onclick  = function() {

    var li = document.createElement("Li");
    var texto = document.getElementById("hobbieUsuario").value; 
    var textonode = document.createTextNode(texto);
    li.appendChild(textonode);
    document.getElementById("listaHobbies").appendChild(li);
}

document.getElementById("add2").onclick  = function() {

    var li = document.createElement("Li");
    var texto = document.getElementById("perguntaUsuario").value; 
    var textonode = document.createTextNode(texto);
    li.appendChild(textonode);
    document.getElementById("listaPerguntas").appendChild(li);
}