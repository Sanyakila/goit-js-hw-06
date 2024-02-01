const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

// output.style.fontSize = 3*input.value + 'px'; // 213px
// console.log("OUTPUT:", output.style);

const changeSizingOfText = () => {
    output.style.fontSize = `${input.value}px`;
};

changeSizingOfText();

input.addEventListener('input', changeSizingOfText);
