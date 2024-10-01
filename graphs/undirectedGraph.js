class UnDirectedGrpah {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (this.adjacencyList[v]) {
            return
        }
        this.adjacencyList[v] = new Set();
    }

    addE(v1, v2) {
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

const graph = new UnDirectedGrpah();
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.displayGraph()
console.log('------------')

graph.addE(1, 3)
graph.addE(2, 3)
graph.addE(2, 4)
graph.addE(1, 2)
graph.displayGraph()
console.log('------------')

graph.removeEdge(2, 3)
graph.displayGraph()
console.log('------------')

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
------------
1 --> 3,2
2 --> 3,4,1
3 --> 1,2
4 --> 2
------------
1 --> 3,2
2 --> 4,1
3 --> 1
4 --> 2
------------
1 --> 3,2
2 --> 1
3 --> 1
------------
*/
