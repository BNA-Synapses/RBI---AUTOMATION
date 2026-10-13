function abrirWhatsApp() {
    let nome = 
    document.getElementById("Nome").value.trim();
    let telefone = 
    document.getElementById("Telefone").value;
    const operadora = 
    document.getElementById("Operadora").value;

    //   Validar campos
    if (nome === "" || telefone === "" || operadora === "") {
        alert("Preencha todos os campos antes de continuar");
        return;
    }


    //   Normalizar nome

    nome = nome 
    .toLowerCase()
    .split(" ")
    .map(palavra =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1)
    )
    .join(" ");

    //    Normalizar telefone

    telefone = telefone.replace(/\D/g, "");

    if(telefone.startsWith("55")
        && telefone.length === 13) {
            telefone = telefone.slice(2);
    }
    
    
    //     Validar telefone

    if (telefone.length !== 11) {
        alert(
            "Telefone inválido. \n\n" + "Digite um celular com DDD. \n" + "Exemplo: (71) 99999-9999"
        );
        return;
    }



    //      Montar Mensagem


    const mensagem = `Olá ${nome}! Tudo bem? 
    Aqui é o Breno da *RBI Logisica Reversa*, responsável pela retirada de aparelhos cancelados da ${operadora}.
    Consta em nosso sistema uma solicitação vinculada ao seu nome e precisamos confirmar a situação dos aparelho.
    Por favor escolha uma das opções abaixo:
    1️⃣ Ainda estou com os aparelhos e quero agendar a retirada
    2️⃣ Já foi coletado. `;



    //      Preparar para whatsapp

    const mensagemCodificada = encodeURIComponent(mensagem);

    const url = `whatsapp://send?phone=55${telefone}&text=${mensagemCodificada}` ;



    //      Abrir whatsapp

    

    window.open(url, "WhatsAppRBI");
    


    //      Limpar Formulario


    document.getElementById("Nome").value = "";
    document.getElementById("Telefone").value = "";
    document.getElementById("Operadora").value = "";
}