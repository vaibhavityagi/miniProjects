// selecting dom elements
const btn = document.querySelector('button');
const num = document.querySelector('input');
const h1 = document.querySelector('h1')
const container = document.querySelector('.container')

// functions
const isPrime = (x) => {
    if (x === 0 || x === 1) {
        return false;
    }
    let cnt = 0;
    for (let j = 1; j * j <= x; j++) {
        if (x % j === 0) {
            cnt++;
            if (x !== x / j) {
                cnt++;
            }
        }
    }
    if (cnt > 2) {
        return false;
    }
    return true;
}

const validation = (where) => {
    const text = document.createElement('p');
    if (where === 1) {
        text.append('Enter number value on the input field to generate numbers')
        setTimeout(() => {
            text.innerHTML = "";
        }, 3000);
    }
    else if (where === 2) {
        text.append('Input value must be a number');
        setTimeout(() => {
            text.innerHTML = "";
        }, 3000);
    }

    text.classList.add('validator-text');
    num.insertAdjacentElement('beforebegin', text);
}

let clickCount = 0;
function generateNumbers() {
    if (num.value === "") {
        validation(1);
    }
    else if (isNaN(parseInt(num.value))) {
        validation(2);
    }

    else {
        clickCount++;

        // removes all the previously generated nunbers
        if (clickCount > 1) {
            const numBox = document.querySelectorAll('.number-box')
            for (let box of numBox) {
                box.remove()
            }
        }

        // generating new numbers for this iteration
        for (let i = 0; i < num.value; i++) {
            const newNumBox = document.createElement('div');
            newNumBox.append(i);
            newNumBox.classList.add('number-box');
            container.append(newNumBox);

            if (isPrime(i)) {
                newNumBox.classList.add('prime');
            } else if (i % 2 === 0) {
                newNumBox.classList.add('even');
            } else {
                newNumBox.classList.add('odd');
            }
        }

        // clearing the input
        num.value = "";

    }
}

// adding event listeners
btn.addEventListener('click', generateNumbers)