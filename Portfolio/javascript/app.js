
// Responsive

const responsive = () => {
    console.log('hello')
    const x = document.getElementById('myTopnav');
    if(x.className === 'menu'){
        x.className += "Responsive";
    } else {
        x.className = "menu"
    }
}

// Mouse pointer

let circle = document.getElementById('circle');

function onMouseMove(e) {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}​

document.addEventListener('mousemove', onMouseMove);

