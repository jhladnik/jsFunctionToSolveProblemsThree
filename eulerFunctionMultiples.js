function multiples(num) {
    let holder = [];

    for (let i=1; i<num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            holder.push(i)
        }
    }

    let sum = holder.reduce((acc,c) => acc+c,0);

    return sum
}