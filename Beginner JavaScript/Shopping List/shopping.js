const input = document.querySelector('#item');
const addButton = document.querySelector('form button');
const ul = document.querySelector('ul.list');
let items = [];

function addItem(event){
    event.preventDefault();
    items.push(input.value);
    input.value = "";
    
    const myHTML = items.map(item => {
        return `
        <li class="shopping-item">
            <input type="checkbox"/> 
            <span class="itemName">${item}</span>
        </li>
        `;
    }).join('');

    ul.innerHTML = myHTML;
    const checks = ul.querySelectorAll('input[type="checkbox"]');
    
    checks.forEach(check => {
        check.addEventListener('input', handleDeleteOptions);
    });
}

function handleDeleteOptions(e){
    const isChecked = e.currentTarget.checked;
    const li = e.currentTarget.parentElement;
    if(isChecked){  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "REMOVE";
        li.insertAdjacentElement('beforeend', deleteButton);

        deleteButton.addEventListener('click', removeItem);
    } else {
        li.querySelector('button').remove();
    }
}

function removeItem(e){
    const toDelete = e.currentTarget.previousElementSibling.textContent;
    e.currentTarget.parentElement.remove();
    
    const i = items.indexOf(toDelete);
    items.splice(i, 1);
}

addButton.addEventListener('click', addItem);