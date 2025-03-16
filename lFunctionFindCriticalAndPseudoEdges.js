// Given a weighted undirected connected graph with n vertices numbered from 0 to n - 1, and an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge between nodes ai and bi. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles and with the minimum possible total edge weight.

// Find all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST). An MST edge whose deletion from the graph would cause the MST weight to increase is called a critical edge. On the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.

// Note that you can return the indices of the edges in any order.

var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    // add index to each edge for tracking
    // [u, v, weight, originalIndex]
    const indexedEdges = edges.map((edge, i) => [...edge, i]);

    // sort edges by weight
    indexedEdges.sort((a,b) => a[2]-b[2]);

    // find MST weight using kruskal
    // without forcing or excluding
    const mstWeight = findMST(n, indexedEdges, -1, -1);

    const critical = [];
    const pseudoCritical =[];

    // check each edge
    for (let i=0; i<indexedEdges.length; i++) {
        // get original index
        const originalIndex = indexedEdges[i][3];

        // try to find MST excluding this edge
        const weightWithout = findMST(n, indexedEdges, i, -1);

        // if MST weight increase or we can't form a complete MST, edge is critical
        if (weightWithout > mstWeight) {
            critical.push(originalIndex);
        } else {
            // try to find MST by forcing this edge to be included
            const weightWith = findMST(n, indexedEdges, -1, i);

            // if MST weight remains the same, edge is pseudo
            if(weightWith === mstWeight) {
                // pseudo edge
                pseudoCritical.push(originalIndex)
            }
        }
    }
    // return our result
    return [critical, pseudoCritical];
};

function findMST(n, edges, excludeIndex, includeIndex) {
    // initialize union-find ds
    const uf = new UnionFind(n);
    // MST weight
    let weight = 0;
    // count of edges in MST
    let count = 0;

    // if we need to include a specific edge
    if (includeIndex !== -1) {
        const [u,v,w] = edges[includeIndex];
        // add edge to MST
        uf.union(u,v);
        // add weight
        weight += w;
        // increment edge count
        count++
    }

    // process all edges in order of weight
    for (let i=0; i<edges.length; i++) {
        // skip excluded edge
        if (i === excludeIndex) continue;
        // skip already included edge
        if (i === includeIndex) continue;

        // get the current edge
        const [u,v,w] = edges[i];

        // if adding this edge doesn't create a cycle
        if (!uf.isConnected(u,v)) {
            // add edge
            uf.union(u,v);
            // add weight
            weight += w;
            // increment
            count ++;
        } 
    }
    return count === n-1 ? weight:Infinity;
}

// Union-Find DS for detecting cycles

class UnionFind {
    constructor(n) {
        // initialize each node as parent
        this.parent = Array(n).fill().map((_, i) => i);
        // initialize rank of each as 0
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x]
    }

    union(x,y) {
        // find root of x
        const rootX = this.find(x);
        // find root of y
        const rootY = this.find(y);

        // already in the same set
        if (rootX === rootY) return false;

        // Union by rank
        if(this.rank[rootX] < this.rank[rootY]) {
            // make rootY the parent of rootX
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            // make rootX the parent of rootY
            this.parent[rootY] = rootX;
        } else {
            // make rootX parent of rootY
            this.parent[rootY] = rootX;
            // increment rank of rootX
            this.rank[rootX]++;
        }

        // Union successful
        return true;
    }

    isConnected(x, y) {
        // check if x and y are in the same set
        return this.find(x) === this.find(y)
    }
}


// Problem is about finding critical and pseudo-critical edges in a minimum spanning tree(MST); need to use a standard MST algorithm like Kruskal's algo which sorts edges by wieght and using a union-find data structure to detect cycles
// Need to identify the critical edges; to do this compute the MST weight first, then for each edge, execute it and recompute the MST; if the weight increases or we can't form a complete MST, the edge is critical; for pseudo-critical, force include edge in the MST and check if the total weight remains the same as the org MST