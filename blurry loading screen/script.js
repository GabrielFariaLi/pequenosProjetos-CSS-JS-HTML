const textoLoad = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring,30)

function blurring() { 
    load++
    load > 99 && clearInterval(int)
    textoLoad.innerText = `${load}%`
    textoLoad.style.opacity = mapearNumeros(load,0,100,1,0)
    bg.style.filter = `blur(${mapearNumeros(load,0,100,30,0)}px)`

}

    // mapear um numero a outro numero ( range )
    const mapearNumeros = (num,minimoNumLoad,maximoNumLoad,minimoNumOpacidade,maximoNumOpacidade) => {
        return (num - minimoNumLoad) * (maximoNumOpacidade - minimoNumOpacidade) / (maximoNumLoad - minimoNumLoad) + minimoNumOpacidade
    }