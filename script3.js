var quarto = {
	padrao: "Testando isso",
	apagado: "tudo escuro kkk"
}

printContent = function (targetRoom, targetState, printType){
	if (printType == 'add') {

	  document.getElementById('main').innerHTML += "<p>" + targetRoom[targetState] + "</p>";


	
	} else if (printType == 'replace') {
	  document.getElementById('main').innerHTML = "<p>" + targetRoom[targetState] + "</p>";
	}
}

testContent = function () {
	//document.getElementById('teste').innerHTML = 'Oi';
	 document.getElementById('main').innerHTML = quarto.padrao;
}

