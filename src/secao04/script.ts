////Classes////
// class Produto {
//   nome: string;
//   preco: number | undefined;
//   tipo: string | undefined;
//   constructor(nome: string, preco?: number, tipo?: string) {
//     this.nome = nome;
//     this.preco = preco;
//     this.tipo = tipo;
//   }
// }

// const livro = new Produto("O Senhor do Anéis", 68.9, "Fantasia");
// console.log(livro);

//Modificadores
// class Produto {
//   nome: string;
//   private preco: number | undefined;
//   readonly tipo: string | undefined;
//   constructor(nome: string, preco?: number, tipo?: string) {
//     this.nome = nome;
//     this.preco = preco;
//     this.tipo = tipo;
//   }
//   getPreco() {
//     return this.preco;
//   }

//   showBookName() {
//     return Produto.getBookName(this.nome);
//   }

//   static getBookName(nome: string) {
//     return `Livro: ${nome}`;
//   }
// }

// class Livro extends Produto {}

// const livro = new Produto("O Senhor do Anéis", 68.9, "Fantasia");
// console.log(livro);
// // console.log(livro.preco);
// console.log(livro.getPreco());
// console.log(livro.showBookName());

//Classe e Interface
//=> Ao criar uma Classe, sua interface é criada automáticamente pelo ts

// class Quadrado {
//   readonly lados = 4;
//   medida: number;
//   constructor(medida: number) {
//     this.medida = medida;
//   }
//   getPerimetro() {
//     return this.medida * this.lados;
//   }
//   getArea() {
//     return this.medida * this.medida;
//   }
// }

// class Circulo {
//   readonly PI = Math.PI;
//   raio: number;
//   constructor(raio: number) {
//     this.raio = raio;
//   }
//   getPerimetro() {
//     return Math.round(2 * this.PI * this.raio * 100) / 100;
//   }
//   getArea() {
//     return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
//   }
// }

// const q1 = new Quadrado(10);

// if (q1 instanceof Quadrado) {
//   console.log(q1.getArea());
// }

// const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
//   if (n < 15) {
//     return new Quadrado(n);
//   } else {
//     return new Circulo(n);
//   }
// });

// formas.forEach((forma) => {
//   if (forma instanceof Quadrado) {
//     console.log(forma.lados);
//   }
//   if (forma instanceof Circulo) {
//     console.log(forma.getPerimetro());
//   }
// });

// console.log(HTMLAnchorElement);
// console.log(Circulo);

////Classes////

////Tuplas////
// const p1 = ["Notebbok", 2500];
// const p2: [string, number] = ["Celular", 780];

// if (typeof p1[0] === "string") {
//   console.log(p1[0].toLowerCase());
// }

// console.log(p2[0].toLowerCase());
// p2[1].toFixed();

// const [nome1, preco1] = p1;
// nome1; //string ou number
// preco1; //string ou number

// const [nome2, preco2] = p2;
// nome2; //string
// preco2; //number

//as const
//=> torna um dado "readonly" e infere o tipo de dado mais específico possível

// function getText(selector: string){
//   const element = document.querySelector<HTMLElement>(selector);
//   if (element) {
//     return [element, element.innerText] as const;
//   } else {
//     return null;
//   }
// }

// const button = getText("button");
// console.log(button);

///Exercício

// const fetchVendas = async () => {
//   const response = await fetch("https://api.origamid.dev/json/vendas.json");
//   const data = await response.json();
//   console.log(data);
//   somarVeendas(data);
// };
// fetchVendas();

// interface detalhesProduto {
//   marca: string;
//   cor: string;
// }
// type Venda = [string, number, string, detalhesProduto];

// function somarVeendas(vendas: Venda[]) {
//   const total = vendas.reduce((total, venda) => {
//     return total + venda[1];
//   }, 0);

//   document.body.innerHTML += `<p>Total: R$ ${total},00 reais</p>`;
// }
////Tuplas////

////Keyof////=> um conceito mais avançado
//=> indica que o dado é uma chave de uma Interface/Type

// interface Produto {
//   nome: string;
//   preco: number;
//   novo: boolean;
// }

// let chave: keyof Produto;

// chave = "novo";
// console.log(typeof chave);

//typeof
//=> indica que um tipo de dado tem o mesmo tipo que outro

// function coordenadas(x: number, y: number) {
//   return { x, y };
// }

// let basicCoord: typeof coordenadas;

// basicCoord = (x: number, y: number) => {
//   return { x, y };
// };

// interface Elementos {
//   a: HTMLAnchorElement;
//   video: HTMLVideoElement;
//   div: HTMLElement;
//   button: HTMLButtonElement;
// }

// const selecionar = <K extends keyof Elementos>(
//   seletor: K
// ): Elementos[K] | null => {
//   return document.querySelector(seletor);
// };

// console.log(selecionar("button")?.innerText);

//checkInterface //! => muito avançado
// async function fetchData<D>(url: string): Promise<D> {
//   const base = "https://api.origamid.dev/json";
//   const response = await fetch(base + url);
//   return await response.json();
// }

// interface Jogo {
//   nome: string;
//   ano: number;
//   desenvolvedora: string;
//   plataformas: string[];
// }

// interface Livro {
//   nome: string;
//   ano: number;
//   autor: string;
//   paginas: number;
// }

// function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
//   if (obj && typeof obj === "object" && key in obj) {
//     return true;
//   } else {
//     return false;
//   }
// }

// async function handelData() {
//   const jogo = await fetchData("/jogo.json");
//   if (checkInterface<Jogo>(jogo, "desenvolvedora")) {
//     console.log(jogo.desenvolvedora);
//   }

//   const livro = await fetchData("/livro.json");
//   if (checkInterface<Livro>(livro, "autor")) {
//     console.log(livro.autor);
//   }
// }

// handelData();
////Keyof////

////Objetos////
//Duck Typing
// interface Produto {
//   nome: string;
//   quantidade: number;
// }

// const p1 = {
//   nome: "Notebook",
//   quantidade: 10,
// };

// const p2 = {
//   nome: "Geladeira",
//   quantidade: 30,
//   freezer: true,
// };

// const serv = {
//   nome: "Instalação",
// };

// function mostrarQuantidade(produto: Produto) {
//   console.log(produto.quantidade + 20);
// }

// mostrarQuantidade(p1);
// mostrarQuantidade(p2);
// // mostrarQuantidade(serv);

///utility types

//Partial
// function mostrarQuantidadePartial(produto: Partial<Produto>) {
//   if (produto.quantidade) {
//     console.log(produto.quantidade + 20);
//   }
// }

// mostrarQuantidadePartial(p1);
// mostrarQuantidadePartial(p2);
// mostrarQuantidadePartial(serv);

// interface Post {
//   titulo: string;
//   vizualizacoes: number;
//   tags: string[];
//   [key: string]: unknown;
// }

// const artigo: Post = {
//   titulo: "Como aprender HTML",
//   vizualizacoes: 4300,
//   tags: ["HTML", "Front End"],
//   autor: "John",
// };

// if (typeof artigo.autor === "string") {
// artigo.autor;
// }

// artigo.descricao;
// artigo.adfasfasd;

//Record
// interface ObjetoLiteral {
//   [key: string]: unknown;
// }

// type ObjLiteral = Record<string, unknown>;

// function mostrarTitulo(obj: ObjLiteral) {
//   if ("titulo" in obj) {
//     console.log(obj.titulo);
//   }
// }

// // mostrarTitulo("string");

// mostrarTitulo({
//   titulo: "HTML e CSS",
// });
////Objetos////
