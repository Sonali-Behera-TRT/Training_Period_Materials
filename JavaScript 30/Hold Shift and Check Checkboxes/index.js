const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')); 
const texts = document.querySelectorAll('.item p');

let lastCheckedInput;

function handleInput(e){
    if(!lastCheckedInput){
        lastCheckedInput = this;
        return;
    }

    let inBetween = false;
    if(e.shiftKey && this.checked && lastCheckedInput.checked){
        checkboxes.forEach((checkbox) => {
            if(checkbox === this || checkbox === lastCheckedInput)
                inBetween = !inBetween;
            
            if(inBetween)
                checkbox.checked = true;
        });
    }
    lastCheckedInput = this;
}

function handleText(){
    const myHTML = `
    <input type="text" value="${this.textContent}">
    `;

    this.innerHTML = myHTML;

    this.querySelector('input').addEventListener('blur', handleBlurInput);
}

function handleBlurInput(){
    this.parentElement.textContent = this.value;
    key = this.value;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleInput);
});

texts.forEach(text => {
    text.addEventListener('mousedown', handleText);
})