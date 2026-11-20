export function getData (){
    const name = document.getElementById('nom')
    const description = document.getElementById('description')
    const technologies = document.getElementById('tec')
    const brief = document.getElementById('brief')
    const date = document.getElementById('duree')
    const dificule = document.getElementById('dificulte')
    const nombre = document.getElementById('nbr')
    const projet= {
        name,
        description,
        technologies,
        brief,
        date,
        dificule,
        nombre,
        projet
    }
    return projet

}