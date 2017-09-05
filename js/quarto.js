	var quarto = {
	visitas: 0,
	lightsOn: false,
	aceso: `<p> É o seu quarto. Ele está bem arrumadinho, até a <span class="inspect" onclick="describe()">cama</span> está feita. <br>
	 pequeno, mas aconchegante...	Olhar pra ele assim, com atenção, faz você lembrar de como gosta dele...</p>
	<p> Mas também parece que tem alguma coisa errada, mesmo que você não saiba exatamente <i>o quê</i> é...</p>`,
	escuro: `<p>Você se percebe de pé num quarto absolutamente escuro.</p>
	<p>A última coisa de que se lembra é de ter apagado as luzes para ir dormir, mas de alguma maneira isso parece uma memória distante.</p>
	<p> Algo - você não sabe exatamente <i>o quê</i> - faz você se sentir que não está em casa... Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.</p>`,
	idle: `<p> Quanto mais tempo cê passa aqui, mais estranho tudo parece...</p>`,
	volta: `<p> Você dá uma volta no seu quarto. </p>`,

	cama: "<p> Bem, é sua cama. É macia e foi barata... Não tem porque não amar.</p>"
}


var description, buttons;
var complemento = "";


function Quarto() {

	resetButton();

	if (quarto.lightsOn == false) {

		description = quarto.escuro;
		btnFunc = "acenderLuz()";
		btnLabel = "Acender as luzes";
		addButton();

	} else if (quarto.visitas < 5) {
		description =  quarto.aceso;
		btnFunc = "darRole()";
		btnLabel = "Dar uma volta no quarto";
		addButton();

	} else {
		complemento += quarto.idle;
		btnFunc = "clear()";
		btnLabel = "Que estranho!";
		addButton();
	}

	printContent (description, complemento, buttons);
	quarto.visitas ++;

}

function acenderLuz() {
	quarto.lightsOn = true;
	Quarto();
}

function darRole() {
	complemento = quarto.volta;
	quarto.volta = "Você dá outra volta no seu quarto.";
	Quarto();
}

function addButton(){
		buttons += `<button onclick="${ btnFunc }">${ btnLabel }</button>`;
}

function resetButton(){
	buttons = "";

}

function describe(){
	complemento = quarto.cama;
Quarto();
}