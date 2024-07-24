def a_star(grafo, inicio, objetivo):
    """
    Implementación del algoritmo A* para encontrar el camino más corto entre dos nodos en un grafo.
    Una lista que representa el camino más corto, o None si no se encuentra un camino.
    """

    # Se crea una lista para simular la cola de prioridad
    cola_prioridad = []

    # Se crea un conjunto para almacenar los nodos explorados
    nodos_explorados = set()

    # Se crea un diccionario para almacenar los nodos padre de cada nodo
    padre = {}

    # Se agrega el nodo inicial a la cola de prioridad
    cola_prioridad.append((h(inicio, objetivo), inicio))

    while cola_prioridad:
        # Se obtiene el nodo con menor costo total (f)
        f, nodo_actual = cola_prioridad.pop(0)

        # Se verifica si se ha llegado al nodo objetivo
        if nodo_actual == objetivo:
            # Se reconstruye el camino desde el nodo objetivo hasta el nodo inicial
            camino = []
            while nodo_actual:
                camino.append(nodo_actual)
                nodo_actual = padre.get(nodo_actual)
            camino.reverse()
            return camino

        # Se marca el nodo actual como explorado
        nodos_explorados.add(nodo_actual)

        # Se exploran los nodos vecinos
        for vecino, costo in grafo[nodo_actual].items():
            if vecino not in nodos_explorados:
                costo_g = padre.get(nodo_actual, 0) + costo
                costo_f = costo_g + h(vecino, objetivo)

                # Se actualiza el padre y el costo g del nodo vecino si es necesario
                if vecino not in padre or costo_g < padre.get(vecino, 0) + costo:
                    padre[vecino] = nodo_actual
                    cola_prioridad.append((costo_f, vecino))

    # No se encontró un camino
    return None

def h(nodo, objetivo):
    """
    Función heurística que estima la distancia entre un nodo y el nodo objetivo.

    Args:
        nodo: La posición del nodo actual.
        objetivo: La posición del nodo objetivo.

    Returns:
        La distancia estimada entre el nodo y el nodo objetivo.
    """
    # En este ejemplo, se utiliza la distancia Manhattan como heurística.
    (x1, y1) = nodo
    (x2, y2) = objetivo
    return abs(x1 - x2) + abs(y1 - y2)

# Ejemplo de uso
grafo = {
    'A': {'B': 7, 'C': 9, 'D': 15},
    'B': {'A': 7, 'C': 10, 'D': 12},
    'C': {'A': 9, 'B': 10, 'D': 11},
    'D': {'A': 15, 'C': 11, 'E': 6},
    'E': {'D': 6, 'F': 14},
    'F': {'E': 14}
}

camino = a_star(grafo, 'A', 'F')
if camino:
    print("Camino encontrado:", camino)
else:
    print("No se encontró un camino")