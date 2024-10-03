// Unweight and Directed Graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(v) {
        if (this.adjacencyList[v]) {
            return
        }
        this.adjacencyList[v] = new Set();
    }

    hasVertex(v) {
        return this.adjacencyList.hasOwnProperty(v);
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            addVertex(v1)
        }
        this.adjacencyList[v1].add(v2)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1].delete(v2)
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
        for (let vCur in this.adjacencyList) {
            this.removeEdge(vCur, v)
        }
        delete this.adjacencyList[v]
    }

    displayGraph() {
        for (let v in this.adjacencyList) {
            console.log(`${v} --> ${[...this.adjacencyList[v]]}`)
        }
    }

    isEmpty() {
        return !Object.keys(this.adjacencyList).length;
    }

    getSize() {
        return Object.keys(this.adjacencyList).length
    }

    getEdgesCount() {
        let edgeCount = 0;
        for (let v in this.adjacencyList) {
            edgeCount += this.adjacencyList[v].size;
        }
        return edgeCount;
    }

    getDegree(v) {
        return this.adjacencyList[v].size;
    }
}

const graph = new Graph();
console.log('Is Empty:: ', graph.isEmpty())
graph.addVertex(1)
console.log('Has Vertex:: ', graph.hasVertex(1))
console.log('Has Vertex:: ', graph.hasVertex(2))
console.log('Is Empty:: ', graph.isEmpty())
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
graph.addEdge(5, 4)
graph.displayGraph()
console.log('------------')

console.log('Size:: ', graph.getSize());
console.log('No of Edges:: ', graph.getEdgesCount());
console.log('Degree:: ', graph.getDegree(1));
console.log('Degree:: ', graph.getDegree(5));
console.log('------------')

console.log('Neighbors')
console.log(graph.getNeighbors(2))
console.log(graph.getNeighbors(4))
console.log(graph.getNeighbors(5))
console.log('------------')

console.log('Has Edge:: ', graph.hasEdge(2, 3))
console.log('Has Edge:: ', graph.hasEdge(5, 3))
graph.removeEdge(2, 3)
console.log('------------')

console.log('Has Edge:: ', graph.hasEdge(2, 3))
graph.removeVertex(4)
graph.displayGraph()
console.log('No of Edges:: ', graph.getEdgesCount());
console.log('------------')



/*
OUTPUT
======
Is Empty::  true
Has Vertex::  true
Has Vertex::  false
Is Empty::  false
1 --> 
2 --> 
3 --> 
4 --> 
5 --> 
------------
1 --> 3,2
2 --> 3,4
3 --> 
4 --> 
5 --> 4
------------
Size::  5
No of Edges::  5
Degree::  2
Degree::  1
------------
Neighbors
2 --> 3,4
4 --> 
5 --> 4
------------
Has Edge::  true
Has Edge::  false
------------
Has Edge::  false
1 --> 3,2
2 --> 
3 --> 
5 --> 
No of Edges::  2
------------
*/
