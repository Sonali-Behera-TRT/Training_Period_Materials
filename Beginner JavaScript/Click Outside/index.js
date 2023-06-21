const buttons = document.querySelectorAll('button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function handleButtonClick(event){
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const name = card.querySelector('h2').textContent;
    const desc = card.dataset.description;
    modalInner.innerHTML = 
    `
        <img src="${imgSrc.replace('200', '600')}" alt ="${name}" />
        <p>${desc}</p>
    `;
    modalOuter.classList.add('open');

}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function removeModal(){
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (event) => {
    const isOutside = !event.target.closest('.modal-inner');
    if(isOutside)
        removeModal();
});

window.addEventListener('keydown', (event) => {
    const key = event.key;
    if(key === 'Escape')
        removeModal();
});