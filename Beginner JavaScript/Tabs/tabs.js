const tabs = document.querySelector('.tabs');
const buttons = tabs.querySelectorAll('button');
const tabPanels = Array.from(tabs.querySelectorAll('[role = "tabpanel"]'));

function handleTabClick(event){
    const button = event.currentTarget;
    buttons.forEach(button => {
        button.setAttribute('aria-selected', false);
    });
    tabPanels.forEach(tabPanel => {
        tabPanel.hidden = true;
    });

    button.setAttribute('aria-selected', true);
    const id = event.currentTarget.id;

    const tabPanel = tabs.querySelector(`[aria-labelledby = '${id}']`)
    tabPanel.hidden = false;

    // const tabPanel = tabPanels.find(tabPanel => {
    //     return (tabPanel.getAttribute('aria-labelledby') === id);
    // });
    // tabPanel.hidden = false;
}

buttons.forEach(button => {
    button.addEventListener('click', handleTabClick);
});

