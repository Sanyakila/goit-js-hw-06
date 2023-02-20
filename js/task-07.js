const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

output.style.fontSize = input.value + 'px';

const changeSizingOfText = () => {
    output.style.fontSize = `${input.value}px`;
};

input.addEventListener('input', changeSizingOfText);
