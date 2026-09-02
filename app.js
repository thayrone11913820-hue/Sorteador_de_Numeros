function sortear() {
    // 1. Ler os campos como texto (para detectar campos vazios)
    const campoQuantidade = document.getElementById('quantidade');
    const campoInicio = document.getElementById('de');
    const campoFim = document.getElementById('ate');


    const quantidadeTexto = campoQuantidade.value;
    const inicioTexto = campoInicio.value;
    const fimTexto = campoFim.value;


    if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
        alert('Preencha todos os campos.');
        return;
    }


    // 2. Converter para número
    const quantidade = Number(quantidadeTexto);
    const inicio = Number(inicioTexto);
    const fim = Number(fimTexto);


    // 3. Validações
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser um número inteiro maior que zero.');
        return;
    }


    if (!Number.isInteger(inicio) || !Number.isInteger(fim) ||
        inicio < 1 || fim < 1) {
        alert('O início e o fim devem ser números inteiros maiores que zero.');
        return;
    }


    if (inicio > fim) {
        alert('O valor inicial não pode ser maior que o valor final.');
        return;
    }


    // 4. Sortear os números dentro do intervalo inclusivo [inicio, fim]
    const sorteados = [];


    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(
            Math.random() * (fim - inicio + 1)
        ) + inicio;
        sorteados.push(numero);
    }


    // 5. Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
        '<label class="texto__paragrafo">' +
        `Números sorteados: ${sorteados.join(', ')}` +
        '</label>';


    // 6. Habilitar o botão Reiniciar
    const botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.disabled = false;
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}


function reiniciar() {
    // Limpar os campos
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';


    // Restaurar a mensagem inicial
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
        '<label class="texto__paragrafo">' +
        'Números sorteados: nenhum até agora' +
        '</label>';


    // Desabilitar o botão Reiniciar novamente
    const botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.disabled = true;
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');


    document.getElementById('quantidade').focus();
}
