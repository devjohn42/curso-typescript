"use strict";
////ANOTATION/INFERENCE////
var _a, _b;
// let produto: string = "Livro";
// let preco: number = 200;
// const barato = preco < 400 ? true : "produto caro";
// function somar(a: number, b: number) {
//   return a + b;
// }
// somar(21, 21);
// const nintendo = {
//   nome: "Nintendo",
//   preco: "2000",
// };
// function priceTransform(produto: { nome: string; preco: string }) {
//   produto.preco = "R$ " + produto.preco;
//   return produto;
// }
// const newProduct = priceTransform(nintendo);
// console.log(newProduct);
//Exercício
// function normalizeText(text: string) {
//   return text.trim().toLowerCase();
// }
// console.log(normalizeText(" DEVELOPER    "))
// const input = document.querySelector("input");
// const total = localStorage.getItem("total");
// if (input && total) {
//   input.value = total;
//   calcularGanho(Number(input.value));
// }
// function calcularGanho(value: number) {
//   const p = document.querySelector("p");
//   if (p) {
//     p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
//   }
// }
// function totalMudou() {
//   if (input) {
//     localStorage.setItem("total", input.value);
//     calcularGanho(Number(input.value));
//   }
// }
// if (input) {
//   input.addEventListener("keyup", totalMudou);
// }
////ANOTATION/INFERENCE////
////STRING, NUMBER, BOOLEAN////
// const frase: string = "Front End";
// const preco: number = 500;
// const condi: boolean = preco > 100;
// if (typeof frase === "string") console.log("frase é string");
// const frase1 = new String("Front End");
// const frase2 = String("Front End");
// const frase3 = "Front End";
// console.log(typeof frase1);
// console.log(typeof frase2);
// console.log(typeof frase3.toLocaleLowerCase());
////STRING, NUMBER, BOOLEAN////
////Union Types////
// let total: string | number = 200;
// total = "300";
// function isNumber(value: string | number) {
//   if (typeof value === "number") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumber(300));
// console.log(isNumber("390"));
// ///comulmente usado na seleção de elementos do DOM
// const button = document.querySelector("button");
// button?.click(); //=> optional chaining
//Exercício//
// const toNumber = (value: number | string) => {
//   if (typeof value === "number") {
//     return value;
//   } else if (typeof value === "string") {
//     return +value;
//   } else {
//     throw new Error("value deve ser um number/string");
//   }
// };
// console.log(toNumber(42));
// console.log(toNumber("42"));
// console.log(toNumber(true));
//Exercício//
////Union Types////
////Types e Interface////
// type NumberOrString = string | number;
// //=> para definir de forma direto tipos mais primitivos;
// let total: NumberOrString = 20;
// total = "30";
// interface InterfaceProduto {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// }
// //=> para definir objeto
// type TypeProduto = {
//   nome: string;
//   preco: number;
//   teclado: boolean;
// };
// function preencherDados(dados: InterfaceProduto) {
//   document.body.innerHTML += `
//   <div>
//   <h2>${dados.nome}</h2>
//   <p>${dados.preco}</p>
//   <p>Inlcui teclado: ${dados.teclado ? "sim" : "não"}</p>
//   </div>
//   `;
// }
// const computador: InterfaceProduto = {
//   nome: "Computador",
//   preco: 2000,
//   teclado: true,
// };
// preencherDados(computador);
// type Categorias = "design" | "codigo" | "descode";
// function pintarCategoria(categoria: Categorias) {
//   if (categoria === "descode") {
//     console.log(categoria);
//   }
// }
// pintarCategoria("descode");
//Exercício//
// const fetchProduct = async () => {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const data = await response.json();
//   console.log(data);
//   showProduct(data);
// };
// fetchProduct();
// interface Empresa {
//   fundacao: number;
//   nome: string;
//   pais: string;
// }
// interface Product {
//   nome: string;
//   preco: number;
//   descricao: string;
//   seguroAcidentes: boolean;
//   empresaFabricante: Empresa;
//   empresaMontadora: Empresa;
// }
// function showProduct(data: Product) {
//   document.body.innerHTML = `
//   <div>
//   <h2>${data.nome}</h2>
//   <h2>${data.preco}</h2>
//   <h2>${data.descricao}</h2>
//   <h2>${data.seguroAcidentes}</h2>
//   <h2>${data.empresaFabricante.fundacao}</h2>
//   <h2>${data.empresaFabricante.nome}</h2>
//   <h2>${data.empresaFabricante.pais}</h2>
//   <h2>${data.empresaMontadora.fundacao}</h2>
//   <h2>${data.empresaMontadora.nome}</h2>
//   <h2>${data.empresaMontadora.pais}</h2>
//   </div>
//   `;
// }
//Exercício//
////Types e Interface////
////Arrays////
// const numbers = [10, 20, 30, 40];
// const values = [10, 20, "taxas", 30, "produto", 40];
// const maiorQue10 = (data: Array<number>) => {
//   return data.filter((n) => n > 10);
// };
// const filterValues = (data: (string | number)[]) => {
//   return data.filter((item) => typeof item === "number");
// };
// console.log(maiorQue10(numbers));
// console.log(filterValues(values));
//Exercício//
// const fecthCursos = async () => {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const data = await response.json();
//   console.log(data);
//   mostrarCursos(data);
// };
// fecthCursos();
// interface Cursos {
//   aulas: number;
//   gratuito: boolean;
//   horas: number;
//   idAulas: number[];
//   nivel: string;
//   tags: string[];
//   nome: "iniciante" | "avancado";
// }
// const mostrarCursos = (cursos: Array<Cursos>) => {
//   cursos.forEach((curso) => {
//     let color;
//     if (curso.nivel === "iniciante") {
//       color = "blue";
//     } else if (curso.nivel === "avancado") {
//       color = "red";
//     }
//     document.body.innerHTML += `
//     <div>
//     <h2 style="color: ${color};">${curso.nome}</h2>
//     <p>${curso.horas}</p>
//     <p>${curso.aulas}</p>
//     <p>${curso.gratuito ? "Gratuito" : "Pago"}</p>
//     <p>${curso.tags.join(", ")}</p>
//     <p>${curso.idAulas.join(" - ")}</p>
//     </div>
//     `;
//   });
// };
//Exercício//
////Arrays////
////Any////
// function normalizar(texto: any) {
//   return texto.trim().toLowerCase();
// }
// console.log(normalizar(" Desgin          "));
// async function fetchJSON(url: string) {
//   const response = await fetch(url);
//   const data = await response.json();
//   manipularData(data);
// }
// fetchJSON("https://api.origamid.dev/json/cursos.json");
// function manipularData(data: { nome: string }) {
//   console.log(data.nome);
// }
// const fecthCursos = async () => {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const data = await response.json();
//   console.log(data);
//   mostrarCursos(data);
// };
// fecthCursos();
// interface Curso {
//   nome: string;
//   horas: number;
// }
// function mostrarCursos(cursos: Curso[]) {
//   cursos.forEach((curso) => {
//     document.body.innerHTML += `
//         <div>
//         <h2>${curso.nome}</h2>
//         <p>${curso.horas}</p>
//         </div>
//         `;
//   });
// }
// const dados: any = "o any gera problemas";
// mostrarCursos(dados);
// console.log(normalizar(42));
////Any////
////Null e Undefined////
const button = document.querySelector("button");
const config = localStorage.getItem("config");
if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
console.log(typeof null); //=> um bug da engines(mantido para não quebrar códigos antigos)
button === null || button === void 0 ? void 0 : button.click();
let total;
console.log(total);
const jogo = {
  nome: "Ragnarok",
};
const livro = {};
if (jogo.nome) {
  (_a = jogo.nome) === null || _a === void 0 ? void 0 : _a.toLowerCase();
}
(_b = livro.nome) === null || _b === void 0 ? void 0 : _b.toLowerCase();
///Propriedades Opcionais///
////Null e Undefined////
