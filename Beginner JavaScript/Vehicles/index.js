const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const cards = tabs.querySelectorAll('[role="tabpanel"] > div');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = modalOuter.querySelector('.modal-inner');

// Tab click handler

function handleTabClick(event){
    const button = event.currentTarget;
    tabButtons.forEach(tabButton => {
        tabButton.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(tabPanel => {
        tabPanel.classList.add('invisible');
    });

    button.setAttribute('aria-selected', 'true');
    const id = button.id;
    
    const tabPanel = document.querySelector(`[aria-labelledby = ${id}]`);
    tabPanel.classList.remove('invisible');
}

tabButtons.forEach(tabButon => {
    tabButon.addEventListener('click', handleTabClick);
});

// card click handler

function handleCardClick(event){
    const src = event.currentTarget.firstElementChild.src;
    const name = event.currentTarget.firstElementChild.alt;
    
    const myHTML = `
        <img src = ${src} alt = ${name}/>
        <h2>${name}</h2>
        <div class="details">
            <p>eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nullaeu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat
            </p>
            <hr />
        </div>
        <button class="modal-button" disabled>Go Back</button>
    `;
    modalInner.innerHTML = myHTML;
    modalOuter.classList.add('open');
    scrollObserver();
}

cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

// modal outer closer

modalOuter.addEventListener('click', (event) => {
    if(!event.target.closest('.modal-inner'))
        removeModal();
});

window.addEventListener('keydown', (event) => {
    const key = event.key;
    if(key === 'Escape')
        removeModal();
});

function removeModal(){
    modalOuter.classList.remove('open');
}

// scroll event observer

function scrollObserver(){
    const targetObserver = modalInner.querySelector('.details').lastElementChild;

    const ob = new IntersectionObserver(obCallback, {
        root: modalInner,
        threshold: 1
    });
    ob.observe(targetObserver);

    function obCallback(payload){
        const modalButton = modalInner.querySelector('.modal-button');
        if(payload[0].intersectionRatio === 1){
            modalButton.disabled = false;
            modalButton.addEventListener('click', removeModal);
            ob.unobserve(targetObserver);
        }
    }
}