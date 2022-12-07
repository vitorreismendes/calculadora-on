function calcular() {
    
    var valorm = document.getElementById('valordese')
    var valora = document.getElementById('valorac')
    var dy = document.getElementById('porcendy')
    var localresultado = document.getElementById('res')
    
    if (valorm.value.length == 0 || valora.value.length == 0 || dy.value.length == 0 ){

    window.alert('[ERRO] Dados em branco')
    } else {

    var vm = Number(valorm.value)
    var va = Number(valora.value)
    var vdy = (dy.value/100)

    var divu = vdy * va
    var resultado = Number((vm / divu * va)*12);

    

    document.getElementById("res").innerHTML = "";
    document.getElementById("res").innerHTML = `Para você receber <strong>${vm.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> mensalmente, deverá investir <strong>${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> na ação escolhida.`;
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