var tempo = 0;

function printTime() {
	  document.getElementById('main').innerHTML += "<p>" + tempo + "</p>";
}

function addTime(time) {
	 tempo += time;
	 horas = Math.floor(tempo / 60);

	 minutos = tempo % 60;
	 document.getElementById('main').innerHTML = "<p>minutos: " + tempo + "</p>";
	 document.getElementById('main').innerHTML += `<p>horas: ${horas}h ${minutos}min </p><br>`;
}
