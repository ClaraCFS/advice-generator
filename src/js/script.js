let cliqueBotao = document.getElementById('botao');
    let conselhoElement = document.querySelector('.conselho');
    let idConselhoElement = document.querySelector('.n-conselho');

    cliqueBotao.addEventListener('click', async function trocaConselho() {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();
        const { id, advice } = dados.slip;
        conselhoElement.textContent = `"${advice}"`;
        idConselhoElement.textContent = `ADVICE #${id}`;
      });
  