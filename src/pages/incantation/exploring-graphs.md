---
layout: ../../layouts/IncantationLayout.astro
title: Exploring Graphs
excerpt: Notes on graph data structures and algorithms in JavaScript.
tags: javascript, typescript, data structures and algorithms, notes
---

# Exploring Graphs

Who is this for? My notes.

## Depth First vs Breadth First Traversal

## Edge Paths to Adjaceny Lists

Sometimes we run across problems where we may need to construct an adjaceny list from an input of two-dimensional edge paths. An adjaceny list is usually a more convenient data structure to center our traversal algorithms around. This is fairly trivial as we're just constructing a an object with keys matching some `Node` identifier and values consisting of neighboring `Node` identifiers.

```ts
type Node = any;
type EdgePath = [Node, Node][];

function undirectedGraphToAdjacencyList(edges: EdgePath) {
  let map = {};

  for (let [a, b] of edges) {
    if (!map.hasOwnProperty(a)) map[a] = [];
    if (!map.hasOwnProperty(b)) map[b] = [];

    map[a].push(b);
    map[b].push(a);
  }

  return map;
}

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(undirectedGraphToAdjacencyList(edges));
/* =>
{
  "w": ["x", "v"]
  "x": ["w", "y"],
  "y": ["x", "z"],
  "z": ["y", "v"],
  "v": ["z", "w"]
}
*/
```
