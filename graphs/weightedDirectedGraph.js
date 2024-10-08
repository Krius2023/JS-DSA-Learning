// Weighted & Directed Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (this.adjacencyList[v]) {
            return
        }
        this.adjacencyList[v] = new Map();
    }

    hasVertex(v) {
        return this.adjacencyList.hasOwnProperty(v);
    }

    addEdge(v1, v2, w) {
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1)
        }
        if (!this.adjacencyList[v2]) {
            this.addVertex(v2)
        }

        this.adjacencyList[v1].set(v2, w)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1].delete(v2)
    }

    hasEdge(v1, v2) {
        return this.adjacencyList[v1].has(v2);
    }

    getEdgeWeight(v1, v2) {
        if (this.adjacencyList[v1].has(v2)) {
            return this.adjacencyList[v1].get(v2)
        }
        return null
    }

    removeVertex(v) {
        for (let key in this.adjacencyList) {
            this.adjacencyList[key].delete(v)
        }
        delete this.adjacencyList[v];
    }

    getNeighbors(v) {
        return `${v} --> ` + [...this.adjacencyList[v].entries()]//.map(([vtx, wt]) => `${vtx}(${wt})`)
    }

    displayGraph() {
        for (let v in this.adjacencyList) {
            console.log(`${v} --> ${[[...this.adjacencyList[v].entries()].map(([vtx, wt]) => `${vtx}(${wt})`)]}`)
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

graph.addEdge(1, 3, 2)
graph.addEdge(2, 3, 3)
graph.addEdge(2, 4, 4)
graph.addEdge(1, 2, 1)
graph.displayGraph()
console.log('------------')

console.log('Size:: ', graph.getSize(1));
console.log('No of Edges:: ', graph.getEdgesCount());
console.log('Degree:: ', graph.getDegree(1));
console.log('Degree:: ', graph.getDegree(2));
console.log('------------')

console.log('Neighbors')
console.log(graph.getNeighbors(2))
console.log(graph.getNeighbors(4))
console.log(graph.getNeighbors(5))
console.log('------------')

console.log('Has Edge:: ', graph.hasEdge(2, 3))
console.log('Has Edge:: ', graph.hasEdge(5, 3))
console.log(graph.getEdgeWeight(2, 3))
graph.removeEdge(2, 3)
console.log(graph.getEdgeWeight(2, 3))
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
1 --> 3(2),2(1)
2 --> 3(3),4(4)
3 --> 
4 --> 
5 --> 
------------
Size::  5
No of Edges::  4
Degree::  2
Degree::  2
------------
Neighbors
2 --> 3,3,4,4
4 --> 
5 --> 
------------
Has Edge::  true
Has Edge::  false
3
null
------------
Has Edge::  false
1 --> 3(2),2(1)
2 --> 
3 --> 
5 --> 
No of Edges::  2
------------
*/
