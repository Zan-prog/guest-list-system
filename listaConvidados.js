function listaConvidados() {
    let convidados = [];
    let opcao;
    do {
        opcao = prompt(
            "Menu:\n" +
            "1 - Adicionar convidado\n" +
            "2 - Buscar convidado\n" +
            "3 - Remover convidado\n" +
            "4 - Listar convidados\n" +
            "0 - Sair"
        );
        switch (opcao) {
            case "1":
                let nomeAdicionar = prompt("Digite o nome do convidado:");
                convidados.push(nomeAdicionar);
                alert("Convidado adicionado!");
                break;
            case "2":
                let nomeBuscar = prompt("Digite o nome do convidado para buscar:");
                let indiceBuscar = convidados.indexOf(nomeBuscar);
                if (indiceBuscar !== -1) {
                    alert("Convidado encontrado: " + nomeBuscar);
                } else {
                    alert("Convidado não encontrado.");
                }
                break;
            case "3":
                let nomeRemover = prompt("Digite o nome do convidado para remover:");
                let indiceRemover = convidados.indexOf(nomeRemover);
                if (indiceRemover !== -1) {
                    convidados.splice(indiceRemover, 1);
                    alert("Convidado removido!");
                } else {
                    alert("Convidado não encontrado.");
                }
                break;
            case "4":
                if (convidados.length > 0) {
                    alert("Lista de convidados: " + convidados.join(", "));
                } else {
                    alert("Nenhum convidado cadastrado.");
                }
                break;
            case "0":
                alert("Saindo do sistema...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "0");
}
