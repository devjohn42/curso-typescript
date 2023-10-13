"use strict";
////Instanceof////
// class Produto {
//   nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }
// class Livro extends Produto {
//   autor: string;
//   constructor(nome: string, autor: string) {
//     super(nome);
//     this.autor = autor;
//   }
// }
// class Jogo extends Produto {
//   jogadores: number;
//   constructor(nome: string, jogadores: number) {
//     super(nome);
//     this.jogadores = jogadores;
//   }
// }
// const buscarProduto = (busca: string) => {
//   if (busca === "O Hobbit") {
//     return new Livro("O Hobbit", "J. R. R. Tolkien");
//   }
//   if (busca === "Dark Souls") {
//     return new Jogo("Dark Souls", 1);
//   }
//   return null;
// };
// const produto = buscarProduto("O Hobbit");
// const produto2 = buscarProduto("Dark Souls");
// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }
// if (produto2 instanceof Jogo) {
//   console.log(produto2.nome);
// }
// if (produto instanceof Produto) {
//   console.log(produto.nome);
//   //retorna apenas propriedades presentes na classe Produto;
// }
// interface Carro {
//   nome: string;
// }
// const honda: Carro = {
//   nome: "Honda",
// };
// console.log(honda instanceof Carro);
// //apresentará erro
///Exercício///
// const link = document.getElementById("origamid");
// console.dir(link);
// if (link instanceof HTMLAnchorElement) {
//   link.href = link.href.replace("http://", "https://");
//   console.log(link)
// }
///Exercício///
////Instanceof////
////Interfaces Do DOM////
// const video = document.querySelector("#videoPrincipal");
// <video id="videoPrincipal" src=""></video>
// if (video instanceof HTMLVideoElement) {
//   console.log(video.volume);
// }
// const links = document.querySelectorAll(".link");
// console.log(links);
// links.forEach((link) => {
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link.href);
//   }
// });
// const arrayLinks = Array.from(links);
// const anchorList = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
// console.log(anchorList);
///Exercício///
// toda vez que for realizar alguma manipulação no DOM ou utilizar algum método que retorna uma classe é necessário entender a classe que gerou o elemento(classe Pai)
// const links = document.querySelectorAll(".link");
// console.log(links);
// const ativarElemento = (elemento: HTMLElement) => {
//   elemento.style.color = "red";
//   elemento.style.border = "2px solid red";
// };
// links.forEach((link) => {
//   // console.log(link.__proto__.__proto__) //=> não funciona em todos os browsers(não utilizar)
//   if (link instanceof HTMLElement) {
//     ativarElemento(link);
//   }
// });
///Exercício///
////Interfaces Do DOM////
////Eventos e Callback////
// const button = document.querySelector("button");
// const handleClick = (event: PointerEvent) => {
//   console.log(event.pageX);
// };
// button?.addEventListener("pointerdown", handleClick);
// const ativarMenu = (event: Event) => {
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX);
//   }
//   if (event instanceof KeyboardEvent) {
//     console.log(event.key);
//   }
// };
// document.documentElement.addEventListener("mousedown", ativarMenu);
// document.documentElement.addEventListener("touchstart", ativarMenu);
// window.addEventListener("keydown", ativarMenu);
// const button = document.querySelector("button");
// // function handleClick(this: HTMLButtonElement, event: MouseEvent) {
// //   console.log(this);
// // }
// //=> Não tão usual, por não saber ao certo quem o this pode ser
// function handleClick(event: MouseEvent) {
//   const elemento = event.currentTarget;
//   if (elemento instanceof HTMLElement) {
//     console.log(elemento.innerText);
//   }
// }
// button?.addEventListener("click", handleClick);
////Eventos e Callback////
////Generics////
// function retorno<generic>(a: generic): generic {
//   return a;
// }
// console.log(retorno<string>("A Game"));
// console.log(retorno(200));
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["banana", "pera", "uva", "laranja", "limao", "maca"];
// function firstFive<T>(lista: T[]) {
//   return lista.slice(0, 5);
// }
// console.log(firstFive(numbers));
// console.log(firstFive(frutas).map(item => item));
// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }
// console.log(notNull("Andre")?.toLowerCase());
// console.log(notNull(200.42)?.toFixed(1));
// const tipoDado = <T>(a: T) => {
//   const resultado = {
//     dado: a,
//     tipo: typeof a,
//   };
//   console.log(resultado);
//   return resultado;
// };
// // const tipoDado = <T>(a: T): {dado: T; tipo: string} => {
// //   const resultado = {
// //     dado: a,
// //     tipo: typeof a,
// //   };
// //   console.log(resultado);
// //   return resultado;
// // };
// //=> Declaração explícita do retorno da função
// tipoDado("Olá Mundo");
// tipoDado(42);
// function extractText<T extends HTMLElement>(element: T) {
//   return {
//     text: element.innerText,
//     element,
//   };
// }
// const link = document.querySelector("a");
// if(link) {
//   console.log(extractText(link).element.href)
// }
// function $<T extends Element>(selector: string): T | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>("a");
// console.log(link);
// const link = document.querySelector<HTMLVideoElement>(".link");
// if (link instanceof HTMLVideoElement) {
//   link?.volume;
// }
// async function getData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   return await response.json();
// }
// interface Notebook {
//   nome: string;
//   preco: number;
// }
// async function handleData() {
//   const notebook = await getData<Notebook>(
//     "https://api.origamid.dev/json/notebook.json"
//   );
//   console.log(notebook);
// }
// handleData();
////Generics////
////Functions////
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c ? c : 0);
// }
// console.log(somar(3, 4, 35));
// const subtrair = (a: number, b: number) => a - b;
// console.log(subtrair(49, 7));
// type Callback = (event: MouseEvent) => void; //=> dificilmente utilizado dessa forma
//=> VOID
// function pintarTela(cor: string): void {
//   document.body.style.background = cor;
// }
// pintarTela("#e3edf7");
// const button = document.querySelector("button");
// button?.click();
// //a partir do momento que houver qualquer tipo de retorno em uma função ela já não é mais do tipo void
// function isString(value: any) {
//   if (typeof value === "string") return true;
// }
// console.log(isString("teste"));
// console.log(isString(200));
//=> NEVER
//onde uma função aborta o script que está acontecendo
// function abortar(mensagem: string):never {
//   throw new Error(mensagem);
// }
// abortar("um erro ocorreu");
// console.log("tente novamente");
// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number;
// }
// function calcular(forma: Quadrado) {
//   forma.perimetro(4);
// }
//=> Function Overload
// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === "string") {
//     return valor.trim().toLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLowerCase());
//   }
// }
// console.log(normalizar("Produto   ").toUpperCase());
// console.log(normalizar(["BaNaNA   ", "    UVa"]));
// function $(seletor: string): Element | null;
// function $(seletor: "a"): HTMLAnchorElement | null;
// function $(seletor: "p"): HTMLParagraphElement | null;
// function $(seletor: "video"): HTMLVideoElement | null;
// function $(seletor: string): Element | Object | null {
//   return document.querySelector(seletor);
// }
// setTimeout(() => {
//   console.log($("a")?.click());
// }, 3000);
// console.log($("a")?.click());
// console.log($("video")?.volume);
// console.log($("p")?.innerText);
///Exercício///
// function arrendonda(valor: number): number;
// function arrendonda(valor: string): string;
// function arrendonda(valor: number | string): number | string {
//   if (typeof valor === "number") {
//     return Math.ceil(valor);
//   } else {
//     return Math.ceil(Number(valor)).toString();
//   }
// }
// console.log(arrendonda(41.8));
// console.log(arrendonda("41.6"));
///Exercício///
////Functions////
////Type Guard e Control Flow////
//=> o Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamdo de Type Narrowing (estreitamento).
//=> O typescript faz o Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.
// function typeGuard(value: any) {
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed(0);
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
// console.log(typeGuard(42.8));
// console.log(typeGuard("232323"));
// console.log(typeGuard(document.body.tagName));
//IN => o operador verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "prop" in obj;
// const obj = {
//   nome: "Origamid",
// };
// if ("nome" in obj) console.log("SIM");
// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function handleProduto(data: Produto) {
//   console.log(data);
//   if ("nome" in data) {
//     document.body.innerHTML += `
//     <p>Nome: ${data.nome}</p>
//     `;
//   }
//   if ("preco" in data) {
//     document.body.innerHTML += `
//     <p>Preço: R$ ${data.preco + 100} reais</p>
//     `;
//   }
// }
// fetchProduto();
////Type Guard e Control Flow////
////Unknown////
/*
Indica que não se sabe o tipo de dados que podem ser passados.
Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida;
*/
// function typeGuard(value: unknown) {
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed(0);
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }
// console.log(typeGuard(42.8));
// console.log(typeGuard("232323"));
// console.log(typeGuard(document.body.tagName));
////Unknown////
////User Type Guard////
// async function fetchCuros() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCuros();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log("é uma instância de array");
//   }
//   if (Array.isArray(data)) {
//     console.log("É array");
//   }
// }
//Type Predicate - is
//o valor de retorno precisa ser boolean
// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     console.log(data.toLowerCase());
//   }
// }
// handleData(200);
// handleData("Origamid");
//Objetos
// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }
// fetchProduto();
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "preco" in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     console.log(data.nome);
//   }
// }
///Exercício///
// async function fetchCuros() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   // console.log(json);
//   handleCursos(json);
// }
// fetchCuros();
// interface Curso {
//   nome: string;
//   horas: number;
//   tags: string[];
// }
// function isCurso(value: unknown): value is Curso {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "horas" in value &&
//     "tags" in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     data.filter(isCurso).forEach((curso) => {
//       console.log(curso);
//       // if (
//       //   "nome" in data[index] &&
//       //   "horas" in data[index] &&
//       //   "tags" in data[index]
//       // ) {
//       //   document.body.innerHTML += `
//       //     <p>Nome: ${curso.nome}</p>
//       //     <p>Horas: ${curso.horas} horas</p>
//       //     <p>Tags: ${curso.tags}</p>
//       //     `;
//       //   document.body.style.fontFamily = "sans-serif";
//       // }
//       document.body.innerHTML += `
//         <div>
//           <h2>Nome: ${curso.nome}</h2>
//           <p>Horas: ${curso.horas} horas</p>
//           <p>Tags: ${curso.tags.join(", ")}</p>
//         </div>
//         `;
//       document.body.style.fontFamily = "sans-serif";
//     });
//   }
// }
///Exercício///
////User Type Guard////
////Type Assertion////
// const video = document.querySelector(".player") as HTMLVideoElement;
// console.log(video.volume);
//=> não muito usual nesses casos
// interface Produto {
//   nome: string;
//   preco: number;
// }
// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   return response.json() as Promise<Produto>;
// }
// async function handleProduto() {
//   const produto = await fetchProduto();
//   console.log(produto.nome);
// }
//non-null operator
//=> indica que não existe a possibilidade do dado ser null, utilizar apenas quando tiver certeza do que está sendo selecionado;
//!//=> cuidado ao utilizar
// const video = document.querySelector("video")!;
// video.volume;
//Outras Sintaxes
// const video1 = document.querySelector(".player") as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector(".player");
// const video3 = document.querySelector<HTMLVideoElement>(".player");
// const video4 = document.querySelector(".player");
// (video4 as HTMLVideoElement).volume;
////Type Assertion////
////Destructuring////
// const { body }: { body: HTMLElement } = document;
// interface Produto {
//   nome: string;
//   preco?: number;
// }
// function handleData({ nome, preco }: Produto) {
//   console.log(nome.includes("book"));
//   console.log(preco?.toFixed());
// }
// handleData({
//   nome: "Notebook",
//   preco: 2000,
// });
// function handleClick1({ currentTarget, pageX }: MouseEvent) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
//   }
//   console.log(pageX);
// }
// function handleClick({ currentTarget }: { currentTarget: EventTarget | null }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em x: 1</h1>`;
//   }
// }
// document.documentElement.addEventListener("click", handleClick1);
// document.documentElement.addEventListener("touchstart", handleClick);
// function comparar(tipo: "menor" | "maior", ...numeros: number[]) {
//   if (tipo === "menor") {
//     return Math.min(...numeros);
//   }
//   if (tipo === "maior") {
//     return Math.max(...numeros);
//   }
// }
// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(comparar("maior", ...arrayNumbers));
// console.log(comparar("menor", ...arrayNumbers));
////Destructuring////
////Intersection////
// type Produto = {
//   preco: number;
// };
// type Carro = {
//   rodas: number;
//   portas: number;
// };
// function handleProdutoCarro(dados: Produto & Carro) {
//   dados.rodas;
//   dados.portas;
//   dados.preco;
// }
// handleProdutoCarro({ rodas: 4, portas: 5, preco: 350000 });
// type TipoCarro = {
//   rodas: number;
//   portas: number;
// };
// type TipoCarroComPreco = TipoCarro & {
//   preco: number;
// };
// const carro: TipoCarroComPreco = { rodas: 4, portas: 5, preco: 350000 };
// console.log(carro);
// interface InterfaceCarro {
//   rodas: number;
//   portas: number;
// }
// interface InterfaceCarro {
//   preco: number;
// }
// function handleInterfaceCarro(carro: InterfaceCarro) {
//   carro.preco;
//   carro.portas;
//   carro.rodas;
// }
// //exemplo prático
// interface Window {
//   userId: number;
// }
// window.userId = 200;
///Exercício Geral///
// interface UserData {
//   nome?: string;
//   email?: string;
//   cpf?: string;
// }
// interface Window {
//   UserData: any;
// }
// window.UserData = {};
// function isUserData(obj: unknown): obj is UserData {
//   if (
//     obj &&
//     typeof obj === "object" &&
//     ("nome" in obj || "email" in obj || "cpf" in obj)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function validJSON(str: string) {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     return false;
//   }
//   return true;
// }
// function loadLocalStorage() {
//   const localUserData = localStorage.getItem("UserData");
//   if (localUserData && validJSON(localUserData)) {
//     const UserData = JSON.parse(localUserData);
//     if (isUserData(UserData)) {
//       Object.entries(UserData).forEach(([key, value]) => {
//         const input = document.getElementById(key);
//         if (input instanceof HTMLInputElement) {
//           input.value = value;
//           window.UserData[key] = value;
//         }
//       });
//     }
//   }
// }
// loadLocalStorage();
// // console.log(isUserData({}));
// function handleInput({ target }: KeyboardEvent) {
//   if (target instanceof HTMLInputElement) {
//     window.UserData[target.id] = target.value;
//     localStorage.setItem("UserData", JSON.stringify(window.UserData));
//   }
// }
// const form = document.querySelector<HTMLElement>("#form");
// form?.addEventListener("keyup", handleInput);
///Exercício Geral///
////Intersection////
