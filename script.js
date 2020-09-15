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

document.getElementById("alterarCurso").onclick = function() {
    var nome;
    nome = prompt("Digite o seu novo cargo ou curso");
    if(nome != "" && nome != null) {
    document.getElementById("curso").innerText = nome; 
    } else {
        alert("É necessário digitar um curso válido.")
    }
}    
document.getElementById("alterarCargo").onclick = function() {
    var nome;
    nome = prompt("Digite o seu novo cargo");
    if(nome != "" && nome != null) {
    document.getElementById("cargo").innerText = nome; 
    } else {
        alert("É necessário digitar uma profissão válida.")
    }
}    