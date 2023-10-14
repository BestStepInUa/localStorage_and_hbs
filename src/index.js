// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import './styles/style.css'

// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD
// 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН
// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ
// 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ, ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ
// 5)СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('.js-list');
const clearBtn = document.querySelector('.clear-Btn');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    let inputValue = input.value;
    const listEl = document.createElement('li');
    listEl.textContent = inputValue;
    list.appendChild(listEl);
    const localStorageDataParsed = JSON.parse(localStorage.getItem('listEl')) || [];
    localStorageDataParsed.push(inputValue);
    updateLocalStorage(localStorageDataParsed);
    input.value = '';
}

function updateLocalStorage(updatedlocalStorageData) {
    localStorage.setItem('listEl', JSON.stringify(updatedlocalStorageData));
}

function savedValue() {
    const savedItems = localStorage.getItem('listEl');
    if (savedItems) {
        const newParsed = JSON.parse(savedItems);
        for (const element of newParsed) {
            const liElem = document.createElement("li");
            liElem.textContent = element;
            list.appendChild(liElem);
        }
    }
}
savedValue();

clearBtn.addEventListener('click', onClearBtn);

function onClearBtn() {
    localStorage.removeItem('listEl');
    list.innerHTML = '';
}

// |--------------------------------|

import baseMarkup from './template/base.hbs';
import listMarkup from './template/list.hbs';
import frameworksMarkup from './template/frameworks.hbs';
import libsMarkup from './template/libs.hbs';
import { base, skillList, frameworks, libs } from './data/hbsData.js';

const markup = baseMarkup(base);
const markupedList = listMarkup(skillList);
const markupedFrameworks = frameworksMarkup(frameworks);
const markupedLibs = libsMarkup(libs);


const rootDiv = document.querySelector('#root');
rootDiv.insertAdjacentHTML('beforeend', markup);
rootDiv.insertAdjacentHTML('beforeend', markupedList);
rootDiv.insertAdjacentHTML('beforeend', markupedFrameworks);
rootDiv.insertAdjacentHTML('beforeend', markupedLibs);


