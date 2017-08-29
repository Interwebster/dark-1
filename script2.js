var quarto = {
	visitas: 0,
	primeira: `<p> É o seu quarto. Ele está bem arrumadinho, até a cama está feita. </p>
	<p> É pequeno, mas aconchegante...	Olhar pra ele assim com atenção faz você lembrar de como gosta dele...<br> Mas também parece que tem alguma coisa errada, 
	mesmo que você não saiba exatamente o quê é...</p>`,
	decima: `<p> Quanto mais tempo cê passa aqui, mais estranho tudo parece... </p>`
}

printContent = function (targetRoom, targetState, printType){
	if (printType == 'add') {
		document.getElementById('main').innerHTML += "<p>" + targetRoom[targetState] + "</p>";

	} else if (printType == 'replace') {
		document.getElementById('main').innerHTML = "<p>" + targetRoom[targetState] + "</p>";
	}
}

Quarto = function () {
		printContent (quarto, 'primeira', 'replace' );

		if (quarto.visitas > 3) {
		printContent (quarto, 'decima', 'add');
		}
	

	quarto.visitas ++;
}
