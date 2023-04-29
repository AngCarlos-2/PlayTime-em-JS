function jogar () {
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutes = data.getMinutes()
    if (hora >= 0 && hora < 8) {
        msg.innerHTML = `Olha a hora: ${hora}:${minutes}. Vai dormir! `
        img.src = 'Sleeping.png'
        document.body.style.background = 'grey'
    }
    else if (hora >= 0 && hora < 12) {
        msg.innerHTML = `São ${hora}:${minutes} Hora de jogar PlayStation!!`
        img.src = 'Aloy.png'
        document.body.style.background = 'blue'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `São ${hora}:${minutes} horas! Hora de jogar Xbox!!`
        img.src = 'Halo.png'
        document.body.style.background = 'green'
    } else {
        msg.innerHTML = `São ${hora}:${minutes} Hora de jogar Nintendo!!`
        img.src = 'Mario Gato.png'
        document.body.style.background = 'red'
    }
} 