
var db = [
{ // index 0 - quarto escuro
    "title": "Escuridão",

    "description": "Você se percebe de pé num quarto absolutamente escuro. A última coisa de que se lembra é de ter apagado as luzes para ir dormir, mas de alguma maneira isso parece uma memória distante." +
        "Algo faz você se sentir que não está em casa... " +
        "<br><br>" + 
        " Você se dá conta que seu braço está estendido e seu dedo sobre o interruptor.",

    "answers": [{
      "title": "Ligar as luzes",
      "target": 1,
      "add" : ""
    }, {
      "title": "Chorar",
      "target": 0,
      "add" : "Você chora um pouquinho (meio sem saber porquê), mas logo pára e se recompõe. Você se assusta fácil, né?"
    }]

  }, { // index 1  - quarto claro
    "title": "Quarto",

    "description": "É o seu quarto. Ele está bem arrumadinho, até a cama está feita. É pequeno, mas aconchegante..." + 
    "Olhar pra ele assim com atenção faz você lembrar de como gosta dele... Mas também parece que tem alguma coisa errada, mesmo que você não saiba exatamente o quê é...",
    
    "answers": [
    {
      "title": "Olhar cama",
      "target": 1,
      "add" : "É sua cama. Ela tá perfeitamente arrumada, tipo hotel - nem parece que foi você..."
    }, {
      "title": "Olhar as prateleiras",
      "target": 1,
      "add" : "Awn, aqui estão seus queridos livros, todos organizadinhos nas prateleiras pequeninas. A maioria é de ficção científica. <br> Hmm, parece que tem um faltando, o seu preferido." +
          "<br> Você vive relendo ele, deve ter deixado em algum canto da casa."
    },{
      "title": "Olhar no espelho",
      "target": 1,
      "add" : "Você se encara fixamente. A cara é de quem teve uma ótima noite de sono e..." +
      "<br> Sua respiração sempre foi assim? Você sente que está respirando normalmente, mas no reflexo parece ofegante. Se bem que deve ser o nervosismo dessa situação bizarra."
    },{
      "title": "Ir para o corredor",
      "target": 3,
      "add" : ""
    },{
      "title": "Ir para o banheiro",
      "target": 2,
      "add" : ""
    }]
     },{
     	//index 2 - banheiro
     	"title": "Banheiro",

     	"description": "Você entra no seu banheiro e fecha a porta." +
     	               "<br> Você costuma brincar que é um banheiro minimalista, que só existe pra poder chamar o quarto de suíte. Assim como o quarto, também está perfeitamente arrumado.",
     	"answers": [
     	 {
     	   "title": "Olhar no espelho",
     	   "target": 2,
     	   "add":"Você se olha no espelho e dá um sorriso por reflexo. Você faz isso toda vez que entra no banheiro, pra ver se não tem nada grudado no aparelho. O sorriso tá ótimo, mas o espelho embaça um pouco e você esfrega com a blusa."
         },{
     	   "title": "Olhar box",
     	   "target": 2,
     	   "add":"Você olha e não se lembra se tomou banho antes de dormir. Por segurança, você verifica se tá com cc, mas na real tá com um cheiro gostoso de banho recem tomado. <br>Hum, o box está completamente seco, que estranho."
         },{
     	   "title": "Voltar para o quarto",
     	   "target": 0,
     	   "add":""
         }
        ]
        },{
     	//index 3 - sala
     	"description": "Descrição do cômodo",
     	"answers": [
     	 {
     	   "title": "Título do botão",
     	   "target": 0,
     	   "add":"texto adicional, se houver."
         }
        ]
        },{
     	//index x - xxxxxxx
     	"description": "Descrição do cômodo",
     	"answers": [
     	 {
     	   "title": "Título do botão",
     	   "target": 0,
     	   "add":"texto adicional, se houver."
         }
        ]
        }
];

var node = 0;
var complement = "";


window.printContent = function() {
	document.getElementById("header").innerHTML= db[node].title;

	if (complement == ""){
		document.getElementById("descriptionDiv").innerHTML =
    db[node].description + "<br><br>" + "O que você quer fazer agora?";

	} else {
		 document.getElementById("descriptionDiv").innerHTML =
    db[node].description + "<br><br>" + complement + "<br><br>" + "O que você quer fazer agora?";
	}
 


var buttonList = "";

  for (i = 0, j = db[node].answers.length; i < j; i++) {
    buttonList += "<p><button onclick='pressButton("+i+")'>"

    + db[node].answers[i].title +
      "</button></p>";
  }

  document.getElementById("answersDiv").innerHTML = buttonList;
}
window.printContent();

window.goTo = function(x) {
  node = x;
  window.printContent()
}

pressButton = function(x){
complement = db[node].answers[x].add; 
window.goTo(db[node].answers[x].target);
}
