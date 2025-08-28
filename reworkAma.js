function amaPack(n) {
    n.sort((a,b)=>b-a);

    let batches = 1;

    if (n.length < 2) {
        return batches
    } 

    else if (n.length > 1) {
        let arr = [];
        for (let i=0; i<n.length; i++) {
            if(n[i] > 0) {
                arr.push(n[i]-1)
            }
        }
        batches += 1;
        amaPack(arr)
    }
}

// console.log(amaPack([3,1,2,2,5,7]), 4)