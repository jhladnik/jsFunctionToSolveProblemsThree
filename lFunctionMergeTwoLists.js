// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var mergeTwoLists = function(list1, list2) {
    //create dummy node and pointer
    const crashTest = new ListNode(-Infinity);
    let pre = crashTest;

    while(list1 && list2){
        //if list1 value is less than or equal to list2 value, set next to list1, pointer to list1, and list1 to the next value
        if(list1.val <= list2.val){
            pre.next = list1;
            pre = list1;
            list1 = list1.next;
        //the reverse of above
        }else{
            pre.next = list2;
            pre = list2;
            list2 = list2.next;
        }
    }
    //need to include the last node if it is in list1 or list2 since we will be at null
    if(!list1) pre.next = list2;
    if(!list2) pre.next = list1;

    //return the head
    return crashTest.next
};

//given two linked lists (list1 and list2); both lists are sorted in non-decreasing order
//return the head if the merged linked list after merging the lists into one sorted list (splicing the nodes of the lists together)
//console.log(mergeTwoLists([1,2,4], [1,3,4]), [1,1,2,3,4,4]);
//console.log(mergeTwoLists([], []), []);
//console.log(mergeTwoLists([], [0]), [0]);