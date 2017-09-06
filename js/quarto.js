var quarto = {
	visitas: 0,
	lightsOn: false,
	aceso: 
		`<p> É o seu quarto. Ele está bem arrumadinho, até a 
		<span class="inspect" onclick="describeThis('cama')">cama</span> está feita. Ele é pequeno, mas aconchegante.	
		Olhar pra ele assim, com atenção, faz você lembrar de como gosta desse espacinho apertado...</p>
		<p> Mas também parece que tem alguma coisa errada, mesmo que você não saiba exatamente <i>o quê</i> é...</p>`,
	escuro: 
		`<p>Você se percebe de pé num quarto absolutamente escuro.</p>
		<p>A última coisa de que se lembra é de ter apagado as luzes para ir dormir, mas de alguma maneira isso parece uma memória distante.</p>
		<p> Algo - você não sabe exatamente <i>o quê</i> - faz você se sentir que não está em casa... Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.</p>`,
	idle: 
		`<p> Quanto mais tempo cê passa aqui, mais estranho tudo parece... Você sente seu corpo paralizado... <br>
		Será medo? Não importa, o fato é que não consegue se mexer. </p>`,
	volta: `<p> Você dá uma volta no seu quarto. </p>`,
	cama: "<p> Bem, é sua cama. É macia e foi barata... Não tem porque não amar.</p>"
}

function Quarto() {
	resetButton();

	if (quarto.lightsOn == false) {
		complemento ="";
		description = quarto.escuro;
		addButton("Acender as luzes", "acenderLuz(currentRoom)");
		quarto.escuro = 
			`<p> Você se percebe de pé num quarto absolutamente escuro...</p>
			<p>O que não é muito surpreendente, já que você acabou de apagar a luz.</p>`;

	} else if (quarto.visitas < timeLimit) {
		description =  quarto.aceso;
		addButton("Dar uma volta no quarto", "darRole()");
		addButton("Apagar as luzes", "acenderLuz(currentRoom)");

	} else if (quarto.lightsOn == true) {
		description =  quarto.aceso;
		complemento += quarto.idle;
		addButton("Ficar em silêncio e esperar pela morte", "clear()")
	}

	printContent (description, complemento, buttons);
	quarto.visitas ++;
}

function acenderLuz() {
	quarto.lightsOn = !quarto.lightsOn;
	Quarto();
}

function darRole() {
	complemento = quarto.volta;
	quarto.volta = "Você dá outra volta no seu quarto.";
	Quarto();
}