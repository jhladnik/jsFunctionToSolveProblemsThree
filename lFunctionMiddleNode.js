// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

var middleNode = function(head) {
    //use the tortoise and hare approach, jumping one variable 2 for every 1 that the other variable jumps; when hare reaches null, return tortoise
    let tort = head;
    let hare = head;
    while(hare !== null && hare.next !== null){
        tort = tort.next;
        hare = hare.next.next;
    };
    return tort
};

//given a singly linked list
//return the middle node of the linked list; if there is two middle nodes, return the second node
//console.log(middleNode([1,2,3,4,5]), [3,4,5]);
//console.log(middleNode([1,2,3,4,5,6]), [4,5,6]);
//console.log(middleNode([1]), [1]);