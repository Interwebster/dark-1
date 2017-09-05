	var quarto = {
	visitas: 0,
	lightsOn: false,
	aceso: `É o seu quarto. Ele está bem arrumadinho, até a cama está feita.
	É pequeno, mas aconchegante...	Olhar pra ele assim com atenção faz você lembrar de como gosta dele...
	Mas também parece que tem alguma coisa errada, mesmo que você não saiba exatamente o quê é...`,
	escuro: `Você se percebe de pé num quarto absolutamente escuro.	A última coisa de que se lembra é de ter apagado as luzes para ir dormir, mas de alguma maneira isso parece uma memória distante.<br><br>
	Algo faz você se sentir que não está em casa... Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.`,
	idle: `Quanto mais tempo cê passa aqui, mais estranho tudo parece...`,
	volta: `Você dá uma volta no seu quarto.`
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
		description += quarto.idle;
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
	quarto.aceso += quarto.volta;
	quarto.volta = "Você dá outra volta no seu quarto.<br><br>";
	Quarto();
}

function addButton(){
		buttons += `<button onclick="${ btnFunc }">${ btnLabel }</button>`;
}

function resetButton(){
	buttons = "";

}