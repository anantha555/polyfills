let arr = [1, 2, [5, [3, [6], 4]]]

console.log(arr.flat(2))
// [ 1, 2, 5, 3, [ 6 ], 4 ]
// NOTE : returns array , takes depth as arg

Array.prototype.myflat = function (depth = 1) {
    let res = [];

    if (!Array.isArray(this)) {
        throw new Error(`${this}.flat is not a function`);
    }

    this.forEach(el => {
        if (Array.isArray(el) && depth > 0) {
            res.push(...el.myflat(depth - 1))
        } else {
            res.push(el)
        }
    })

    return res
}

// Array.prototype.myflat = function (depth) {
//     let res = [];

//     if (!Array.isArray(this)) {
//         throw new Error(`${this}.flat is not a function`);
//     }

//     this.forEach(el => (Array.isArray(el) && depth > 0)
//         ? res.push(...el.myflat(depth - 1))
//         : res.push(el))

//     return res
// }

console.log(arr.myflat(15));
