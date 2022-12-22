function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var minuto = data.getMinutes()
    var link = window.document.getElementById('link')
    link.addEventListener('mouseenter',entrar)
    link.addEventListener('mouseout',sair)

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#6D7A4C'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#BB7E51'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#387898'
    }

    function entrar() {
        if (hora >= 0 && hora < 12) {
            link.style.color = '#263523'
        } else if (hora >= 12 && hora < 18) {
            link.style.color= '#884421'
        } else {
            link.style.color = '#21222E'
        }
    }

    function sair() {
        if (hora >= 0 && hora < 12) {
            link.style.color = '#FFFFFF'
        } else if (hora >= 12 && hora < 18) {
            link.style.color = '#FFFFFF'
        } else {
            link.style.color = '#FFFFFF'
        }
    }
}
