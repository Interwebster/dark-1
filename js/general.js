printContent = function(x, y, z) {
	document.getElementById('descricao').innerHTML = `<p>${x}<p>`;
	document.getElementById('complementos').innerHTML += `<p>${y}<p>`;
	document.getElementById('botoes').innerHTML = `<p>${z}<p>`;
}
