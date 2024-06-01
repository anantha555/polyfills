// let arr1 = [1,2,3,4,5]

// let arr2 = [11,22,33,44,55,66]

// let arr3 =[0,0,0]


// temp1 = arr1.concat(arr2, arr3, 888,999)

// console.log(temp1)


Array.prototype.myConcat = function(...args){
    let res =[...this];
    // console.log(...args)
    args.map(item =>{
        
        if(Array.isArray(item)){
            res =[...res, ...item]
        }else {
            res.push(item)
        }
    })
    return res
}


// temp = arr1.myConcat(arr2, arr3,888,999)

// console.log(temp)


const arr1 = [1,2,3]
const arr2 = [4,5,6]
const value1 = 'y'
const value2 = () => {}
const value3 = undefined
const value4 = null

console.log(arr1.concat(arr2,value1,value2, value3, value4)); 
console.log(arr1.myConcat(arr2,value1,value2, value3, value4)); 
