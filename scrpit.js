

const toggler = document.getElementById('toggler');
const dropdown = document.getElementById('dropdown');
const button = document.getElementById('button');
const popup = document.getElementById('popup');

document.onclick = function(e){
    if(e.target.id !== 'dropdown' && e.target.id !== 'toggler'){
        toggler.classList.remove('active');
        dropdown.classList.remove('active');
    }
}

toggler.onclick = function (){
    toggler.classList.toggle('active');
    dropdown.classList.toggle('active');
}

window.addEventListener('click', function(b) {
    if(b.target.id !== 'button' && b.target.id !== 'popup'){
        button.classList.remove('active');
        popup.classList.remove('active');
    }
})

button.onclick = function (){
    button.classList.toggle('active');
    popup.classList.toggle('active');
}

