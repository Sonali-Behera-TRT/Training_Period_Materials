function wait(ms){
    return new Promise(res => {
        setTimeout(res, ms);
    });
};

function ask(options){
    return new Promise(async function(resolve){
        //create a popup with all the fields in it

        const popup = document.createElement('form');
        popup.classList.add('popup');
        
        popup.insertAdjacentHTML(
        'afterbegin',
         `
        <fieldset>
            <label>${options.title}</label>
            <input type="text" name="input"/>
            <button type="submit">Submit</button>
        </fieldset>
        `
        );

        console.log(popup);
        //check if they want a cancel button

        if(options.cancel){
            const skipButton = document.createElement('button');

            skipButton.type = 'button';
            skipButton.innerText = 'Cancel';

            popup.firstElementChild.appendChild(skipButton);
        }

        console.log(popup);
        // listen for the submit event on the inputs

        popup.addEventListener('submit', event => {
            event.preventDefault();
            const name = event.target.input.value;

            popup.classList.remove('open');
            
        });

        // when someone does submit it, resolve the data that was in the input box!

        document.body.appendChild(popup);
        await wait(50);
        popup.classList.add('open');
    });
}