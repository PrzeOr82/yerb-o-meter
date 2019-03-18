let btnAdd = document.getElementById('btnAdd');
let addedYerba;
let dropdown = document.querySelector('#dropdown');
let option;
let table = document.getElementById('lista');
let list = [];
let obj = {};
let num = table.lastElementChild.getAttribute('id').replace('item', '') * 1;
let btnRem;
let row;

class Item {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

btnAddRemFunction = (btnList) => {
    for (i = 0; i < btnList.length; i++) {
        btnList[i].onclick = function(e) {
            row = document.getElementById('item' + this.id.replace('btnRem', ''));
            row.remove();
        }
    }
}

addItem = () => {
    num++;
    addedYerba = document.querySelector('#addedYerba').value;
    option = dropdown[dropdown.selectedIndex].value;

    obj = new Item(addedYerba, option);
    list.push(obj);

    table.insertAdjacentHTML('beforeEnd', `<tr id="item${num}"><td>${obj.name}</td><td>${obj.score}</td><td><button id="btnEdit${num}" class="btn" style="color:green"><i class="fas fa-pen"></i></button></td><td><button id="btnRem${num}" class="btn" style="color:red"><i class="fas fa-trash-alt"></i></button></td></tr>`);
    document.querySelector('#addedYerba').value = ''
    dropdown.selectedIndex = 0;
    btnRem = document.querySelectorAll('button[id^="btnRem"]');

    btnAddRemFunction(btnRem);
}

btnAdd.addEventListener('click', addItem);