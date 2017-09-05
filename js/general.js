currentRoom = "quarto";

printContent = function(x, y, z) {
	document.getElementById('descricao').innerHTML = x;
	document.getElementById('complementos').innerHTML = y;
	document.getElementById('botoes').innerHTML = z;
}
