"use strict";
let grid;
grid = [
    {
        alphabets: ['a', 'h', 'i', 'j', 'n', 's', 'w'],
        value: 1
    },
    {
        alphabets: ['c', 'g', 'k', 'o', 'r', 'u'],
        value: 2
    },
    {
        alphabets: ['b', 'e', 'p', 'q', 't', 'x'],
        value: 5
    },
    {
        alphabets: ['d', 'f', 'm', 'l', 'v', 'y', 'z'],
        value: 8
    }
];
const form = document.querySelector('form');
const userInput = form.querySelector('input');
function handleSubmit(e) {
    e.preventDefault();
    const str = userInput.value.toLowerCase();
    let valueString = '(';
    const answer = str
        .split('')
        .reduce((total, curr) => {
        const foundRow = grid.find((gridItem) => {
            return gridItem.alphabets.includes(curr);
        });
        if (foundRow) {
            valueString += `${foundRow.value} + `;
            return total + foundRow.value;
        }
        valueString += '0 + ';
        return total;
    }, 0);
    valueString = valueString.substring(0, valueString.length - 3) + ')';
    document.querySelector('h1').textContent = answer.toString();
    document.querySelector('p').textContent = valueString;
}
form.addEventListener('submit', handleSubmit);
//# sourceMappingURL=task.js.map