const endpoint = 'https://jsonplaceholder.typicode.com';
const table = document.querySelector('table');

async function fetchData(req) {
    const response = await fetch(`${endpoint}${req}`);
    const data = await response.json();
    return data;
}

async function fillTable(){
    const data = await fetchData('/posts');
    const myHTML = data.map(item => {
        return `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td><button>Delete Record!</button></td>
        </tr>`;
    }).join(' ');
    table.insertAdjacentHTML('beforeend', myHTML);

    const buttons = table.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click',    handleClick);
    });
}

async function handleClick(event){

    const toDelete = event.currentTarget.parentElement.parentElement;
    const idOfElToDelete = toDelete.firstElementChild.textContent;

    await fetch(`${endpoint}/posts/${idOfElToDelete}`, {
        method: 'DELETE'
    });

    toDelete.remove();
}

fillTable();