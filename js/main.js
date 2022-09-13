let sobreMiModal = document.getElementById('sobreMiModal')
let sobreMi = document.getElementById('sobreMi')
let cerrarSM = document.getElementById('cerrarSM')

sobreMi.onclick = () =>{
    sobreMiModal.showModal()
}
cerrarSM.onclick = () =>{
    sobreMiModal.close()
}

let proyectosModal = document.getElementById('proyectosModal')
let proyectos = document.getElementById('proyectos')
let cerrarPR = document.getElementById('cerrarPR')


proyectos.onclick = () =>{
    proyectosModal.showModal()
}
cerrarPR.onclick = () =>{
    proyectosModal.close()
}
