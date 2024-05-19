function deepCopy(val) {
    if (['string', 'number', 'boolean'].includes(typeof val)) {
        return val;
    } else if (Array.isArray(val)) {
        return val.map(el => deepCopy(el));
    } else {
        return Object.keys(val).reduce((acc, key) => {
            acc[key] = deepCopy(val[key]);
            return acc;
        }, {});
    }
}

// object example 
let obj1 = {
    a1: {
        b1: {
            c1: 5
        }
    }
}
let obj2 = deepCopy(obj1);

obj2.a1.b1.c1 = 55;

console.log(obj1)
console.log(obj2)

// array example 
let arr = [1, 2, [3, 4], 5];
let brr = deepCopy(arr);

brr[2].push(6)

console.log(arr)
console.log(brr)

