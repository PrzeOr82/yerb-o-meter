let btnAdd = document.getElementById('btnAdd');
let addedYerba;
let dropdown = document.querySelector('#dropdown');
let option;
let table = document.getElementById('lista');
let list = [];
let obj = {};
let num = table.lastElementChild.getAttribute('id').replace('item', '') * 1;
let btnRem;
let btnEdit;
let row;
let dialog = document.querySelector('#editPopup');
let btnCancel = document.getElementById('cancel');
let btnSubmit = document.getElementById('submit');
let editName = document.getElementById('editName');
let editScore = document.getElementById('editScore');
let idItem;


class Item {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}


btnRemFunction = (btnRemList) => {
    for (i = 0; i < btnRemList.length; i++) {
        btnRemList[i].onclick = function() {
            idItem = this.id.replace('btnRem', '');
            row = document.getElementById('item' + idItem);
            row.remove();
        }
    }
}

editValues = (id) => {
    editName.value = document.getElementById('name' + id).innerText;
    editScore.value = document.getElementById('score' + id).innerText;
}

saveEditedValues = () => {
    document.getElementById('name' + idItem).innerText = editName.value
    document.getElementById('score' + idItem).innerText = editScore.value

}

btnEditFunction = (btnEditList) => {
    for (i = 0; i < btnEditList.length; i++) {
        btnEditList[i].onclick = function() {
            // console.log(this.id);
            dialog.showModal();
            idItem = this.id.replace('btnEdit', '');
            editValues(idItem);
        }
    }
}

addItem = () => {
    num++;
    addedYerba = document.querySelector('#addedYerba').value;
    option = dropdown[dropdown.selectedIndex].value;

    obj = new Item(addedYerba, option);
    list.push(obj);

    table.insertAdjacentHTML('beforeEnd', `<tr id="item${num}"><td id="name${num}">${obj.name}</td><td id="score${num}">${obj.score}</td><td><button id="btnEdit${num}" class="btn" style="color:green"><i class="fas fa-pen"></i></button></td><td><button id="btnRem${num}" class="btn" style="color:red"><i class="fas fa-trash-alt"></i></button></td></tr>`);
    document.querySelector('#addedYerba').value = ''
    dropdown.selectedIndex = 0;
    btnRem = document.querySelectorAll('button[id^="btnRem"]');
    btnEdit = document.querySelectorAll('button[id^="btnEdit"]');

    btnRemFunction(btnRem);
    btnEditFunction(btnEdit);
}

btnAdd.addEventListener('click', addItem);

btnCancel.addEventListener('click', function() {
    dialog.close('animalNotChosen');
});

btnSubmit.addEventListener('click', saveEditedValues);