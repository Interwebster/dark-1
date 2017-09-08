
/* --------------------VARIÁVEIS----------------------- */
//Variáveis de conteúdo
var quarto = {};
var sala = {};

//Variáveis de controle
var currentRoom; //registra sempre o comodo em que o usuario se encontra. base pra varias funcoes
var contexto; //registra sempre o contexto da ultima ação realizada
var description, complemento, buttons, contextButtons = ""; //variáveis que armazenam o que será impresso na tela
var timeLimit = 8; //variável teste de limite de tempo para que algo aconteça
var contador = 0; //variável que marca a passagem do tempo


/* --------------------FUNÇÕES----------------------- */

printContent = function(x, y, z) { // imprime o conteúdo na tela
	tit = "<h1>" + currentRoom.titulo +  "</h1>";
	document.getElementById('titulo').innerHTML = tit;
	document.getElementById('descricao').innerHTML = description;
	document.getElementById('complemento').innerHTML = complemento;
	document.getElementById('botoes').innerHTML = buttons + contextButtons;
}

function addButton(x, y) { // cria um botão e adiciona a variávei buttons
	btnLabel = x;
	btnFunc = y;
	buttons += `<button class="basic" onclick="${ btnFunc }">${ btnLabel }</button>`;
}

function addContextButton(x, y) { // cria um botão e adiciona a variávei buttons
	btnLabel = x;
	btnFunc = y;
	contextButtons += `<button class="context" onclick="${ btnFunc }">${ btnLabel }</button>`;
}

function resetButton() { //reseta apenas os botões
	buttons = "";
}

function resetContent (){ // reseta todos os campos de conteúdo
	description = "";
	complemento = "";
	buttons = "";
	contextButtons = "";
}

function describe(object) { // descreve algo no campo complemento
	contextButtons = "";
	var comodo = currentRoom;
	complemento = comodo[object];

	if (botoesContextuais[object] != undefined) { // verifica se o complemento em questão possui botões contextuais
		x = botoesContextuais[object][0];
		y = botoesContextuais[object][1];
		addContextButton (x, y);
	}
	printContent (description, complemento, buttons);
}

function roomState(roomState) { // atualiza a variável 'description', que é impressa com printContent
	description = currentRoom[roomState];
}


function createClickable (object, string) { //varre uma string por uma substring e transforma ela num texto clicável
	clickable = `<span class="inspect" onclick="describe('${object}')"> ${object} </span>`;
	context = object;
	currentRoom[string] = currentRoom[string].replace(object, clickable);
}
