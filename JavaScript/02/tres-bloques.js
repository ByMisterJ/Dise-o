function handleMouseOver(color1) {
    var mensaje1

    switch (color1) {
        case 'rojo':
            mensaje1 = 'Entraste al bloque rojo'
            break
        case 'blanco':
            mensaje1 = 'Entraste al bloque blanco'
            break
        case 'azul':
            mensaje1 = 'Entraste al bloque azul'
            break
        default:
            mensaje1 = 'Entraste al lugar'
    }

    alert(mensaje1)
}

function handleMouseOut(color2) {
    var mensaje2

    switch (color2) {
        case 'rojo':
            mensaje2 = 'Saliste desde el bloque rojo'
            break
        case 'blanco':
            mensaje2 = 'Saliste desde el bloque blanco'
            break
        case 'azul':
            mensaje2 = 'Saliste desde el bloque azul'
            break
        default:
            mensaje2 = 'Saliste desde otro lugar'
    }

    alert(mensaje2)
}