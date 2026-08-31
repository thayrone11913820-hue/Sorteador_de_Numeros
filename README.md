# 🎲 Sorteador de Números

Atividade prática da disciplina **Lógica de Programação II**, com aplicação de **HTML, CSS e JavaScript**.

O layout da aplicação já está pronto (HTML estruturado e CSS estilizado). O desafio de vocês é **implementar a lógica em JavaScript**, deixando o sorteador funcional.

![Preview da tela](img/ia.png)

---

## 📌 O que a aplicação faz

O usuário informa três valores:

- **Quantidade de números** a serem sorteados;
- **Do número** (início do intervalo);
- **Até o número** (fim do intervalo);

Ao clicar em **Sortear**, o sistema deve sortear a quantidade de números pedida, dentro do intervalo informado, e exibir o resultado na tela. Ao clicar em **Reiniciar**, o formulário e o resultado devem voltar ao estado inicial.

---

## 🗂️ Estrutura do projeto

```
sorteador-numeros/
├── index.html      # Estrutura da página (pronto)
├── style.css       # Estilização da página (pronto)
├── app.js          # Lógica em JavaScript (VAZIO — é aqui que vocês vão trabalhar)
└── img/            # Imagens usadas no layout
```

> ⚠️ O arquivo `app.js` está **propositalmente vazio**. Essa é a atividade: implementar as funções que fazem o sorteio funcionar.

---

## 🚀 Como clonar e executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/lenoln-prof/sorteador-numeros.git
```

### 2. Acesse a pasta do projeto

```bash
cd sorteador-numeros
```

### 3. Abra o `index.html` no navegador

Não é necessário instalar nada — é um projeto de HTML, CSS e JS puro (*vanilla*), sem frameworks e sem dependências. Você pode:

- Dar duplo clique no arquivo `index.html`; **ou**
- No VS Code, clicar com o botão direito em `index.html` e escolher **"Open with Live Server"** (recomendado, pois recarrega a página automaticamente a cada alteração salva).

### 4. Edite o arquivo `app.js`

É nele que toda a lógica pedida abaixo deve ser implementada. Salve o arquivo e recarregue a página no navegador para testar.

---

## 🧩 O que precisa ser implementado

Abra o `index.html` e observe os elementos que o JavaScript vai controlar:

| Elemento | id | Função |
|---|---|---|
| Campo numérico | `quantidade` | quantos números serão sorteados |
| Campo numérico | `de` | início do intervalo |
| Campo numérico | `ate` | fim do intervalo |
| Botão | `btn-sortear` | chama `sortear()` |
| Botão | `btn-reiniciar` | chama `reiniciar()` |
| Div de resultado | `resultado` | onde o(s) número(s) sorteado(s) deve(m) aparecer |

O HTML já está preparado para chamar duas funções (veja os atributos `onclick` em `index.html`). Vocês devem criar as duas em `app.js`:

### `function sortear() { ... }`

1. Ler os valores digitados em `quantidade`, `de` e `ate`.
2. **Validar** a entrada, por exemplo:
   - os campos não podem estar vazios;
   - `de` não pode ser maior que `ate`;
   - `quantidade` deve ser maior que zero.
   - Se algo estiver inválido, avisar o usuário (pode usar `alert()` ou exibir uma mensagem na tela) e interromper a função.
3. **Sortear** a quantidade de números pedida, dentro do intervalo `[de, ate]` (incluindo os dois extremos).
4. **Exibir** os números sorteados dentro da `div#resultado`, substituindo o texto "nenhum até agora".
5. Depois de sortear, o botão **Reiniciar** deve ficar habilitado (ele começa desabilitado — veja a classe `container__botao-desabilitado` no HTML).

### `function reiniciar() { ... }`

1. Limpar os campos `quantidade`, `de` e `ate`.
2. Voltar o texto da `div#resultado` para o estado inicial ("Números sorteados: nenhum até agora").
3. Desabilitar novamente o botão **Reiniciar**.

---

## 💡 Dicas

- Para sortear um número inteiro entre dois valores, combine `Math.random()` com `Math.floor()`.
- Use `document.getElementById(...)` (ou `querySelector`) para acessar os campos e a área de resultado.
- Um `for` (ou `while`) ajuda a repetir o sorteio `quantidade` vezes.
- Um array é útil para guardar os números sorteados antes de exibi-los; `array.join(", ")` facilita montar o texto final.
- Para habilitar/desabilitar um botão, altere o atributo `disabled` e/ou troque a classe CSS entre `container__botao` e `container__botao-desabilitado`.

---

## 🌟 Desafios extras (opcional)

- Impedir números repetidos no mesmo sorteio.
- Validar se a `quantidade` pedida é possível dentro do intervalo (ex.: pedir 10 números sem repetição entre 1 e 5 não é possível).
- Exibir os números sorteados em ordem crescente.
- Adicionar uma pequena animação ao exibir o resultado.

---

## ✅ Entrega

- Faça commit e push das alterações no `app.js` (e nos outros arquivos, se necessário) para o seu repositório.
- Confirme que a aplicação funciona corretamente antes de entregar, testando os cenários de sucesso e de erro (campos vazios, intervalo inválido, etc.).
