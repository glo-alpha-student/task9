'use strict';

const titleName = document.getElementsByTagName('h1');
const buttons = document.getElementsByClassName('handler_btn');
const plusButton = document.querySelector('.screen-btn');
const items1 = document.querySelectorAll('.percent');
const items2 = document.querySelectorAll('.number');
const range = document.querySelector('.main-controls__range > input'); //?
const span = document.querySelector('.main-controls__range> span');//?
const inputAll = document.getElementsByClassName('total-input');
let blocks = document.querySelectorAll('.screen');

const appData = {

    title: '',
    screens: [],
    adaptive: true,
    services: {},
    screenPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: Math.random() * 99,

    asking: function () {
        appData.title = prompt('Как называется ваш проект?');

        while (appData.isNumber(appData.title)) {
            appData.title = prompt('Как называется ваш проект?');
        }

        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name = prompt('Какие типы экранов нужно разработать?');

            while (appData.isNumber(name)) {
                name = prompt('Какие типы экранов нужно разработать?');
            }

            price = +prompt('Сколько будет стоить данная работа?');

            while (!appData.isNumber(price)) {
                price = +prompt('Сколько будет стоить данная работа?');
            }
            appData.screens.push({ id: i, name: name, price: price });
        }
        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name = prompt('Какой дополнительный тип услуги нужен?');

            while (appData.isNumber(name)) {
                name = prompt('Какой дополнительный тип услуги нужен?');
            }
            price = +prompt('Сколько это будет стоить?');

            while (!appData.isNumber(price)) {
                price = +prompt('Сколько это будет стоить?');
            }

            appData.services[name] = price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let cry in appData.services) {
            appData.allServicePrices += appData.services[cry];
        }
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },
    getFullPrice: function (variableone, variabletwo) {
        appData.fullPrice = variableone + variabletwo;
    },
    getServicePercentPrices: function (variableone, variabletwo) {
        appData.servicePercentPrice = variableone - Math.ceil((variableone * (variabletwo / 100)));
    },
    getRollbackMessage: function (price) {
        if (price > 30000) {
            return 'Даем скидку в 10%';
        } else if (price > 15000) {
            return 'Даем скидку в 5%';
        } else if (price > 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
    start: function () {
        appData.asking();
        appData.addPrices(); appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.getTitle();
        appData.logger();
    }

};

appData.start();

console.log(titleName[0].textContent);
console.log(buttons);
console.log(plusButton);
console.log(items1);
console.log(items2);
console.log(range);
console.log(span);
console.log(inputAll[0]);
console.log(inputAll[1]);
console.log(inputAll[2]);
console.log(inputAll[3]);
console.log(inputAll[4]);
console.log(blocks);


