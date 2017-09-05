var quarto = {
	visitas: 0,
	lightsOn: false,
	aceso: `É o seu quarto. Ele está bem arrumadinho, até a cama está feita.<br><br>
	É pequeno, mas aconchegante...	Olhar pra ele assim com atenção faz você lembrar de como gosta dele...<br> Mas também parece que tem alguma coisa errada, mesmo que você não saiba exatamente o quê é...<br><br>`,
	escuro: `Você se percebe de pé num quarto absolutamente escuro.<br><br>
	A última coisa de que se lembra é de ter apagado as luzes para ir dormir, mas de alguma maneira isso parece uma memória distante.<br><br>
	Algo faz você se sentir que não está em casa... Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.`,
	idle: `Quanto mais tempo cê passa aqui, mais estranho tudo parece...<br><br>`,
	volta: `Você dá uma volta no seu quarto.<br><br>`
}


var description, buttons;
var complemento = "";


function Quarto() {

	if (quarto.lightsOn == false) {

		description = quarto.escuro;
		btnFunc = "acenderLuz()";
		btnLabel = "Acender as luzes";

	} else if (quarto.visitas < 5) {
		description =  quarto.aceso;
		btnFunc = "darRole()";
		btnLabel = "Dar uma volta no quarto";

	} else {
		description += quarto.idle;
		btnFunc = "clear()";
		btnLabel = "Que estranho!";
	}

	buttons = `<button onclick="${ btnFunc }">${ btnLabel }</button>`;

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
