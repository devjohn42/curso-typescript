import Estatisticas from "./class/Estatisticas.js";
import { CountList } from "./modules/countBy.js";
import fetchData from "./modules/fetchData.js";
import normalizarTransacao from "./modules/normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (!data) return;

  const transacoes = data.map(normalizarTransacao);
  // console.log(transacoes);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
  // console.log("codigo seguiu");
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");

  if (!tabela) return;

  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
  });
}

function preencherLista(list: CountList, containerID: string): void {
  const containerElement = document.getElementById(containerID);
  if (containerElement) {
    Object.keys(list).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
    });
  }
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);

  preencherLista(data.pagamento, "pagamento");
  preencherLista(data.status, "status");
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const diaElement = document.querySelector<HTMLElement>("#dia span");
  if (diaElement) {
    diaElement.innerText = data.melhorDia[0];
  }
}

handleData();
