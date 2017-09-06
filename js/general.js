var quarto = {};
var sala = {};
var currentRoom;

var description, complemento, buttons;
var timeLimit = 8;
var contador = 0;

printContent = function(x, y, z) {
	document.getElementById('descricao').innerHTML = x;
	document.getElementById('complemento').innerHTML = y;
	document.getElementById('botoes').innerHTML = z;
}

function addButton(x, y) {
	btnLabel = x;
	btnFunc = y;
	buttons += `<button onclick="${ btnFunc }">${ btnLabel }</button>`;
}

function resetButton() {
	buttons = "";
}

function resetContent (){
	description = "";
	complemento = "";
	buttons = "";
}

function describe(object) {
	var comodo = currentRoom;
	complemento = comodo[object];
	printContent (description, complemento, buttons);
}

