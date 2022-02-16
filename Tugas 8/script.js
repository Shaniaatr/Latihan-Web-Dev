// function ubahwarna (){
//     title2.style.backgroundColor = 'blue'
// }

// const title2 = document.querySelector('.title2')
// title2.onclick = ubahwarna;

// title2.addEventListener('click', function(){
//     title2.style.backgroundColor = 'lightgrey';
// });

// title2.addEventListener('click', function(){
//     title2.style.color = 'pink';
// });

const title2 = document.querySelector('.title2');
// title2.onclick = function() {
//     title2.style.backgroundColor = 'lightgrey';
// }

title2.addEventListener('mouseenter', function() {
    title2.style.color = 'red';
});
title2.addEventListener('mouseleave', function() {
    title2.style.color = 'black';
});

const UbahBackground = document.getElementById('UbahBackground');
UbahBackground.onclick = function() {
//     document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

const title1 = document.querySelector('.title1');
title1.addEventListener('mouseenter', function() {
    title1.style.color = 'lightseagreen';
});
title1.addEventListener('mouseleave', function() {
    title1.style.color = 'lightcoral';
});

function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
