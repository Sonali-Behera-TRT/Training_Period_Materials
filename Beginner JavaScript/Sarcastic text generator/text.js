const textArea = document.querySelector('textarea[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('input[name="filter"]'));

/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
  /* eslint-enable */

const filters = {
    sarcastic(letter, i){
        if(i % 2 == 0)
            return letter.toLowerCase();
        return letter.toUpperCase();
    },
    funky(letter){
        let funkyLetter = funkyLetters[letter];
        if(funkyLetter)
            return funkyLetter;
        
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if(funkyLetter)
            return funkyLetter;

        return letter;
    },
    unable(letter){
        const random = Math.random() * 3 | 0;
        if(letter === ' ' && random === 2)
            return '...';
        return letter;
    }
};

function minifyText(text){
    return `${text.slice(0, 50)} <span>READ MORE</span>`;
}

function generateResult(text){
    const selectedRadio = filterInputs.find(input => input.checked).value;

    const generatedText = Array.from(text).map(filters[selectedRadio]).join('');
    
    let modifiedText = generatedText;
    if(generatedText.length > 50)
        modifiedText = minifyText(generatedText);

    result.innerHTML = modifiedText;
    const span = document.querySelector('span');
    if(span){
        span.addEventListener('click', () => {
            result.textContent = generatedText;
        });
    }
}

textArea.addEventListener('input', e => generateResult(textArea.value));

filterInputs.forEach(input => {
    input.addEventListener('input', e => generateResult(textArea.value));
})