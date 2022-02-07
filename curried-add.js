function curriedAdd(total) {
    if(total === undefined) return 0;
    // let sum = total;
    return function add(num) {
        if(num === undefined) return total;
        total += num;
        return add;
    }
}

module.exports = { curriedAdd };
