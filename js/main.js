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

    table.insertAdjacentHTML('beforeEnd', `<tr><td>${obj.name}</td><td>${obj.score}</td><td><button class="btn" style="color:green"><i class="fas fa-pen"></i></button></td><td><button class="btn" style="color:red"><i class="fas fa-trash-alt"></i></button></td></tr>`);
    document.querySelector('#addedYerba').value = ''
    dropdown.selectedIndex = 0;


}



btn.addEventListener('click', addItem);