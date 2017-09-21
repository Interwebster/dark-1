var quarto = {
	titulo: "Quarto",
    intro: `<p> Você acorda no seu quarto. O sol ilumina o cômodo ao passar pelas barras da janela.
    A sensação é de ter dormido durante uma eternidade...</p>` ,

    padrao: `<p>Você levanta e observa o quarto. Ele possui duas janelas, uma pequena mesa cheia de coisas,
    sua cama e alguns quadros de péssimo gosto.</p>
    <p> Você não gosta muito daqui, é apertado e, bem, meio isolado... Afinal, é o cômodo mais alto da torre mais alta do castelo... </p>
    <p> Você sonha com o dia em que vai poder voltar pro seu antigo quarto...</p>`,

    cama: `<p> Sua querida cama. Você sempre gostou de dormir, para desagrado do seu pai...</p>`,
    janela: `<p> É sua janela. É relativamente grande, mas as barras incomodam um pouco. Pensando bem, por que diabos ela tem barras? </p>`,
    janelas: `<p> São duas janelas, em cantos opostos do quarto. O sol bate quando nasce e depois quando está para se por, é gostoso.</p>`,
    quadros: `<p> São pinturas extremamente fiéis de pessoas extremamente horríveis. Um exemplo é seu tataravô Artur, o Terrível. 
    Ele recebeu o título depois de quase falir o reino. Gastava todo o dinheiro com festas, jóias e quadros de si mesmo... </p>
    <p> Não é a toa que o quadro dele tá escondido aqui nesse quartinho. Acho que seu pai mandou pendurar aqui só pra te provocar. </p>`,
    "antigo quarto": `<p>Seu quarto antigo era no meio do Jardim Real. Naquela época, cuidar do jardim era responsabilidade sua. 
    Que saudade de acordar com o doce aroma das gardênias no ar...</p>`,

    pular: `Testando`
}

var botoesContextuais = {
	cama: ["Deitar de novo","Deitar()"]
}

currentRoom = quarto;
createClickable("janela", "intro");
createClickable("janelas", "padrao");
createClickable("cama", "padrao");
createClickable("quadros", "padrao");
createClickable("antigo quarto", "padrao");


function Quarto () {
	currentRoom = quarto;
	resetContent();

	if (contador == 0) {
		roomState("intro");
		contador++;
		button.add("Levantar", "Quarto()");

	} else { 
		roomState("padrao");
		button.add("Teste", "Quarto()");
	}

	function janela(){

}

	printContent();
}

function Deitar () {
	contador = 0;
	quarto.intro = `<p> Você deita na cama. O sol ilumina o cômodo ao passar pelas barras da janela. <p>`;
	Quarto();

}