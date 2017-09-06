quarto = {
    intro: `<p> Você acorda no seu quarto. O sol ilumina o cômodo ao passar pelas barras da janela.
    A sensação é de ter dormido durante uma eternidade...</p>` ,

    descricao: `<p>Seu quarto. Ele possui duas janelas, uma pequena mesa cheia de coisas, sua cama e alguns quadros.</p>
    <p> Você não gosta muito daqui, é apertado e, bem, fica na torre mais alta do Castelo. </p>
    <p>Seu antigo quarto era enorme e ficava perto dos Jardins Reais, quando eles ainda eram sua responsabilidade...
    Claro, isso foi ANTES do acidente com as plantas carnívoras que você criou...</p>`,

    cama: `<p> Sua querida cama. Você sempre gostou de dormir, para desagrado do seu pai: <br>
    "Uma princesa deve dormir tarde e acordar cedo! O povo deve sentir que a família real está sempre ciudando do reino, vigilante!"
    </p>`,

    sol: `O sol é belo;`
}

function Quarto () {
	currentRoom = quarto;
	resetContent();

	if (contador == 0) {
		createClickable("sol");

		description = quarto.intro;
		contador++;
		addButton("Levantar", "Quarto()")

	} else {
	}

	printContent(description, complemento, buttons);
}


function createClickable (target) {

	clickable = `<span class="inspect" onclick="describe('${target}')"> ${target} </span>`;
	quarto.intro = quarto.intro.replace(target, clickable);
}