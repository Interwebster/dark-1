sala = {
    lightsOn: true,
    description: "oi"
}

function Sala() {
    resetContent();
    currentRoom = sala;

    description = sala.description;
    addButton ("Voltar para o quarto", "Quarto()");
	printContent (description, complemento, buttons);
}