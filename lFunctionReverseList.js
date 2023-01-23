// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    //create two variables, previous for reassignment of the head to the tail, and next so we can flip the references on the nodes
    let previous = null;
    let next = null;

    //use a while loop to move through the list; while the head (current) is not equal to null (tail)
    while(head!=null){
        //need to hold the value before reassignment
        next = head.next;
        //reassign now
        head.next = previous;
        previous = head;
        head = next;
    }
    return previous
};

//given the head of a singly linked list
//return the list after it has been reversed
//console.log(reverseList([1,2,3,4,5]), [5,4,3,2,1]);
//console.log(reverseList([1,2]), [2,1]);
//console.log(reverseList([]), []);