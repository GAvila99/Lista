let item = [];
let valor = [];
let qtd = [];
let validação = true;


console.log('1. Adicionar um item na lista');
console.log('2. Remover um item da lista');
console.log('3. alterar um item da lista');
console.log('4. Exibir a lista');
console.log('5. Sair do programa');

while (validação) {
    let opcao = prompt('Digite a opção desejada: ');
    if (opcao == 1) {
        adicionarItem();
    } else if (opcao == 2) {
        removerItem();
    } else if (opcao == 3) {
        alterarItem();
    } else if (opcao == 4) {
        exibirLista();
    } else if (opcao == 5) {
        validação = false;
    } else {
        console.log('Opção inválida!');
    }
}


function adicionarItem() {
    let entrada = prompt('Digite o nome do item: ');
    item.push(entrada);
    entrada = prompt('Digite o valor do item: ');
    valor.push(entrada);
    entrada = prompt('Digite a quantidade do item: ');
    qtd.push(entrada);
}

function removerItem() {
    let entrada = prompt('O numero do item que quer remover: ')
    entrada = parseInt(entrada);
    item.pop(entrada - 1);
}

function alterarItem(){
    let opção = prompt('Digite o número do item que deseja alterar: ');
    opção = parseInt(opção);
    let entrada = prompt('Digite o novo nome do item: ');
    item[opção - 1] = entrada; 
    entrada = prompt('Digite o novo valor do item: ');
    valor[opção - 1] = entrada;
    entrada = prompt('Digite a nova quantidade do item: ');
    qtd[opção - 1] = entrada;
}

function exibirLista() {
    let listagem = 1;
    console.log('Lista de compras:');
    console.log('item - valor - quantidade - total');
    for (let i = 0; i < item.length; i++) {
        console.log(`${listagem}. ${item[i]} - R$ ${valor[i]} - Qtd: ${qtd[i]} - Total: R$ ${valor[i] * qtd[i]}`);
        listagem++;
    }

}

