var quarto = {
	visitas: 0,
	lightsOn: false,
	aceso: `<p> É o seu quarto. Ele está bem arrumadinho, até a cama está feita. </p>
	<p> É pequeno, mas aconchegante...	Olhar pra ele assim com atenção faz você lembrar de como gosta dele...<br> Mas também parece que tem alguma coisa errada, 
	mesmo que você não saiba exatamente o quê é...</p>`,
	escuro: `<p>Você se percebe de pé num quarto absolutamente escuro. </p>
	<p> A última coisa de que se lembra é de ter apagado as luzes para ir dormir, mas de alguma maneira isso parece uma memória distante. </p>
	<p> Algo faz você se sentir que não está em casa... Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.</p>`,
	idle: `<p> Quanto mais tempo cê passa aqui, mais estranho tudo parece... </p>`
}

printContent = function (x, y,z){
	document.getElementById('descricao').innerHTML = x;
	document.getElementById('complementos').innerHTML = y;
	document.getElementById('botoes').innerHTML = z;
}


Quarto = function () {
	var description, complemento, buttons = "";

	if (quarto.lightsOn == true) {
		description =  quarto.aceso;
		

		if (quarto.visitas > 5) {
			description += quarto.idle;
		}

	} else {
		description = quarto.escuro;
		buttons = `<button onclick="acenderLuz()"> Acender as luzes </button>`
	}


	printContent (description, complemento, buttons);
	quarto.visitas ++;

	acenderLuz = function (){
		quarto.lightsOn = true;
		Quarto();
	}

}




