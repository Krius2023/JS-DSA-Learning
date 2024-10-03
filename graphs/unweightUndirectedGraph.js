// Unweight and Undirected Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (this.adjacencyList[v]) {
            return
        }
        this.adjacencyList[v] = new Set();
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            addVertex(v1)
        }
        if (!this.adjacencyList[v2]) {
            addVertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
    }

    hasEdge(v1, v2) {
        return this.adjacencyList[v1].has(v2);
    }

    getNeighbors(v) {
        return `${v} --> ${[...this.adjacencyList[v]]}`;
    }

    removeVertex(v) {
        if (!this.adjacencyList[v]) {
            return
        }
        for (let adjV of this.adjacencyList[v]) {
            this.removeEdge(v, adjV)
        }
        delete this.adjacencyList[v]
    }

    displayGraph() {
        for (let v in this.adjacencyList) {
            console.log(`${v} --> ${[...this.adjacencyList[v]]}`)
        }
    }
}

const graph = new Graph();
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.displayGraph()
console.log('------------')

graph.addEdge(1, 3)
graph.addEdge(2, 3)
graph.addEdge(2, 4)
graph.addEdge(1, 2)
graph.displayGraph()
console.log('------------')

console.log('Neighbors')
console.log(graph.getNeighbors(2))
console.log(graph.getNeighbors(4))
console.log(graph.getNeighbors(5))
console.log('------------')

console.log(graph.hasEdge(2, 3))

graph.removeEdge(2, 3)
graph.displayGraph()
console.log('------------')

console.log(graph.hasEdge(2, 3))

graph.removeVertex(4)
graph.displayGraph()
console.log('------------')



/*
OUTPUT
======
1 --> 
2 --> 
3 --> 
4 --> 
5 --> 
------------
1 --> 3,2
2 --> 3,4,1
3 --> 1,2
4 --> 2
5 --> 
------------
Neighbors
2 --> 3,4,1
4 --> 2
5 --> 
------------
true
1 --> 3,2
2 --> 4,1
3 --> 1
4 --> 2
5 --> 
------------
false
1 --> 3,2
2 --> 1
3 --> 1
5 --> 
------------
*/
