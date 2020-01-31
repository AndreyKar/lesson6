let menuItem = document.getElementsByClassName('menu-item'),
    menuBar = document.querySelector('.menu'),
    titleBlock = document.querySelectorAll('.column'),
    title = document.getElementById('title'),
    reklama = document.getElementsByClassName('adv'),
    relation = document.getElementById('prompt');

menuBar.insertBefore(menuItem[1], menuItem[3]);

let fifthButton = document.createElement('li');
fifthButton.className = "menu-item";
fifthButton.innerText = "Пятый пункт";
menuBar.appendChild(fifthButton);

document.body.style.background = "url('/img/apple_true.jpg')";

let newTitle = document.createElement('div');
newTitle.className = "title";
newTitle.textContent = "Мы продаем только подлинную технику Apple";
titleBlock[1].replaceChild(newTitle, title);
titleBlock[1].removeChild(reklama[0]);

relation.textContent = prompt('Как вы относитесь к технике Apple?', '');