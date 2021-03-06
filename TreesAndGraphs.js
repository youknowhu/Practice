/* CTCI 4.1 Route between Nodes
1. BFS
*/

function routeExists(startNode, endNode) {
  if (startNode === endNode) return true;
  let queue = [];
  let visited = [];

  startNode.marked = true;
  queue.push(startNode);
  visited.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const adjacentNodes = currentNode.getAdjacent();

    adjacentNodes.forEach(node => {

      if (!visited.includes(node)) {
        if (node === endNode) {
          return true;
        }
        visited.push(node);
        queue.push(node)
      }
    })
  }

  return false;
}

//each node has the following properties: left, right, and value
/* Plan:
1. Go through array, split in half to create top of array, and then split
the subsequent left and right to crete left and right arrays and so forth.
2. base case is if only one value in the array for left or right?
*/

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function createMinimalTree(array){
  if (array.length === 0) return;

  const midIdx = Math.floor(array.length / 2);

  const midNode = new Node(array[midIdx],
    createMinimalTree(array.slice(0, midIdx)),
    createMinimalTree(array.slice(midIdx + 1)))
  return midNode;
}


function createLinkedList(headNode) {
  let queue = [headNode];

  while (queue.length > 0) {
    const childrenQueue = [];
    const newLinkedList = queue[0]

    //check for children and also create linkedList


    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      if (node.left) childrenQueue.push(node.left);
      if (node.right) childrenQueue.push(node.right);

      newLinkedList.add(node);
    }


    queue = childrenQueue;
  }
}

function checkBalanced(root) {

}
