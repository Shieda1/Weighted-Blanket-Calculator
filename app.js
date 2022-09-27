// https://www.omnicalculator.com/everyday-life/weighted-blanket

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const blanketweightRadio = document.getElementById('blanketweightRadio');
const yourweightRadio = document.getElementById('yourweightRadio');

let blanketweight;
let yourweight = v; 

// labels of the inpust
const variable = document.getElementById('variable');

blanketweightRadio.addEventListener('click', function() {
  variable.textContent = 'Your weight';
  yourweight = v;
  result.textContent = '';
});

yourweightRadio.addEventListener('click', function() {
  variable.textContent = 'Blanket weight';
  blanketweight = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(blanketweightRadio.checked)
    result.textContent = `Blanket weight = ${computeblanketweight().toFixed(5)}`;

  else if(yourweightRadio.checked)
    result.textContent = `Your weight = ${computeyourweight().toFixed(5)}`;
})

// calculation

// blanketweight = (yourweight / 10) + 0.68

function computeblanketweight() {
  return (Number(yourweight.value) / 10) + 0.68;
}

function computeyourweight() {
  return (Number(blanketweight.value) * 10) - 0.68;
}