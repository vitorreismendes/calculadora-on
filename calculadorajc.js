function calcular() {
    let valori = document.getElementById('valorin');
    let valorm = document.getElementById('valorm');
    var anos = document.getElementById('anos');
    let taxaj = document.getElementById('taxaj');

    let vi = Number(valori.value);
    let vm = Number(valorm.value);
    let an = Number(anos.value);
    let meses = an*12;
    let tx = Number(taxaj.value);
    let txm = (1+(tx/100))**(1/12)-1;
    
    let totalinvestido = vi + (vm*meses);

    var resultado = (vi*((1+(txm))**meses))+(vm*(((((1+(txm)))**meses)-1)/(txm)))
    

    let totaldejuros = resultado - totalinvestido; 
    /*.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});*/


    document.getElementById("res").innerHTML = "";
    document.getElementById("res").innerHTML = `<p>Valor Inicial: ${vi.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br> Aporte Mensal: ${vm.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br> Período: ${an} anos <br> Taxa de Juros: ${tx}% a.a <br><br> <strong>RESULTADO ABAIXO</strong> <br><br> Valor Total Obtido: <strong>${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> <br> Valor Total Investido: ${totalinvestido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br> Total de Juros: ${totaldejuros.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p> `;
    
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