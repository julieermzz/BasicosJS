let miForma = documents.querySelector("#miForma")
let valorTarea = documents.querySelector("#valorTarea")
let nuestraLista = documents.querySelector("#nustraLista")

miForma.addEventListener("submit", (e)=>{
    e.preventDefault()
    crearTarea(valorTarea.value)
})

const crearTarea = (tarea) => {
    console.log(tarea)
    let nuestroHTML = '<li>${tarea} <button onclick= "borrarElemento(this)">Borrar</button> </li>'
    nuestraLista.insertAdjacentHTML("beforeend", nuestroHTML)
    valorTarea.value = ""
    valorTarea.focus()

}

const borrarElemento = (elementoABorrar) => {
    elementoABorrar.parentElement.remove()
}
