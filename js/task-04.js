const buttomPlus = document.querySelector('[data-action="increment"]');

const buttomMinus = document.querySelector('[data-action="decrement"]');

const total = document.querySelector('#value');

let counterValue = 0;

const plusNumber= ()=> {
    counterValue += 1;
    total.textContent = counterValue;

    return counterValue;
}

const minusNumber= ()=> {
    counterValue -= 1;
    total.textContent = counterValue;
    
    return counterValue;
}


buttomPlus.addEventListener('click', plusNumber);

buttomMinus.addEventListener('click', minusNumber);

