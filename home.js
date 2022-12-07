
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=check]")

const pegarestilo = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)

const coresnormais = {
    cor1: pegarestilo(html, "--cor1"),
    cor2: pegarestilo(html, "--cor2"),
    cor3: pegarestilo(html, "--cor3"),
    cor4: pegarestilo(html, "--cor4"),
    cor5: pegarestilo(html, "--cor5"),
    cor6: pegarestilo(html, "--cor6"),

    sombra: pegarestilo(html, "--sombra"),
    borda: pegarestilo(html, "--borda"),
    texto: pegarestilo(html, "--texto"),
}

const coresdark = {
    cor1: "#E1E6FA",
    cor2: "#C4D7ED",
    cor3: "#375D81",
    cor4: "#375D81",
    cor5: "white",
    cor6: "#ABC8E2",

    sombra: "black",
    borda: "black",
    texto: "black",
}

const transformakey = key => "--" + key.replace (/([A-Z])/, "-$1").toLowerCase()

const trocarcores = (cores) => {
    Object.keys(cores).map(key => 
        html.style.setProperty(transformakey(key), cores[key]))
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? trocarcores(coresdark) : trocarcores(coresnormais)
})

document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('coresdark')
    const html = document.querySelector('html')
    const modo = document.getElementById('modo')


    if(darkModeStorage){
        html.setAttribute("dark", "true")
        modo.checked = true; 
    }

    modo.addEventListener('change', () => {
        if(modo.checked){
            html.setAttribute("dark", "true");
            localStorage.setItem('coresdark', true);
            
            
        } 
        else{
            html.removeAttribute("dark");
            localStorage.removeItem('coresdark');        
        }
   })
})

function clicarmenu() {
    if (btmenu.style.display == 'flex') {
        btmenu.style.display = 'none'
        bttema.style.display = 'none'
    } else {
        btmenu.style.display = 'flex'
        bttema.style.display = 'flex'
    }
}

function mudartamanho() {
    if (window.innerWidth >= 1050) {
        btmenu.style.display = 'flex'
        bttema.style.display = 'flex'
    } else {
        btmenu.style.display = 'none'
        bttema.style.display = 'none'
    }
}