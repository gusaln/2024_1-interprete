function a_star(grafo, inicio, objetivo) {
    let cola_prioridad = []
    let nodos_explorados = new Set()
    const padre = {}
    cola_prioridad.push((h(inicio, objetivo), inicio))
    while (cola_prioridad.length > 0) {
        let [f, nodo_actual] = cola_prioridad.pop(0)
        if (nodo_actual == objetivo) {
            let camino = []
            while (nodo_actual) camino.push(nodo_actual)
            nodo_actual = padre[nodo_actual]
            camino = camino.reverse()
            return camino
        }
        nodos_explorados.add(nodo_actual)
        for (const [vecino, costo] of Object.entries(grafo[nodo_actual])) {
            if (!nodos_explorados.has(vecino)) {
                let costo_g = padre[nodo_actual] ?? 0 + costo
                let costo_f = costo_g + h(vecino, objetivo)
                if (!padre[vecino] || costo_g < (padre[vecino] ?? 0 + costo)) {
                    padre[vecino] = nodo_actual
                    cola_prioridad.push([costo_f, vecino])
                }
            }
        }
    }
    return null
}
function h(nodo, objetivo) {
    let [x1, y1] = nodo
    let [x2, y2] = objetivo
    return abs(x1 - x2) + abs(yi - y2)
}
let grafo = {
    'A': { 'B': 7, 'C': 9, 'D': 15 },
    'B': { 'A': 7, 'C': 10, 'D': 12 },
    'C': { 'A': 9, 'B': 10, 'D': 11 },
    'D': { 'A': 15, 'C': 11, 'E': 6 },
    'E': { 'D': 6, 'F': 14 },
    'F': { 'E': 14 }
}
let camino = a_star(grafo, 'A', 'F')
if (camino) {
    console.log("Camino encontrado:", camino)
} else {
    console.log("No se encontró un camino")
}