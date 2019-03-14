let btn = document.querySelector('button');
let addedYerba;
let dropdown = document.querySelector('#dropdown');
let option;
let table = document.getElementById('lista');
let list = [];
let obj = {};

class Item {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

addItem = () => {
    addedYerba = document.querySelector('#addedYerba').value;
    option = dropdown[dropdown.selectedIndex].value;

    obj = new Item(addedYerba, option);
    list.push(obj);

    table.insertAdjacentHTML('beforeEnd', `<tr><td>${obj.name}</td><td>${obj.score}</td><td><i class="fas fa-pen"></i></td></i><td><i class="fas fa-trash-alt"></td></tr>`);
    document.querySelector('#addedYerba').value = ''
    dropdown.selectedIndex = 0;


}



btn.addEventListener('click', addItem);