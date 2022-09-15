const proyecto = document.getElementById('proyecto')
const proyectosModal = document.getElementById('proyectosModal')
const cerrarPR = document.getElementById('cerrarPR')

proyecto.onclick=()=>{
    proyectosModal.showModal()
}

cerrarPR.onclick=()=>{
    proyectosModal.close()
}

const sobreMi = document.getElementById('sobreMi')
const sobreMiModal = document.getElementById('sobreMiModal')
const cerrarSM = document.getElementById('cerrarSM')

sobreMi.onclick=()=>{
    sobreMiModal.showModal()
}

cerrarSM.onclick=()=>{
    sobreMiModal.close()
}