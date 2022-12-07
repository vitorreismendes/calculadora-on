const porcentegem = document.getElementById('porcento');

function insert(num) {

    var numero = document.getElementById('itela').value;
    document.getElementById('itela').value = numero + num ;
}

function clean() {

    document.getElementById('itela').value ="";
}

function back() {

    var resultado = document.getElementById('itela').value;
    document.getElementById('itela').value = resultado.substring(0, resultado.length -1);
}

function calcular() {

    var resultado = document.getElementById('itela').value;

    if(resultado) {

        document.getElementById('itela').value = eval(resultado);
    }
    else {

        document.getElementById('itela').value = ""
    } 
}




document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('coresdark')
    const html = document.querySelector('html')
     
    if(darkModeStorage){
        html.setAttribute("dark", "true")
    }
})

function clicarmenu() {
    if (btmenu.style.display == 'flex') {
        btmenu.style.display = 'none'
    
    } else {
        btmenu.style.display = 'flex'
        
    }
}

function mudartamanho() {
    if (window.innerWidth >= 741) {
        btmenu.style.display = 'flex'
        
    } else {
        btmenu.style.display = 'none'
       
    }
}