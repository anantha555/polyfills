const arr = [1,2,3,4,5];

// FOR EACH 

/**
 * for each loop return index value , index and array itself 
 * so this allows us to modifiy the given array 
*/
// arr.forEach(el => console.log(el))

Array.prototype.myForEach= function(cb){
    for (let index = 0; index < this.length; index++) {
       cb(this[index], index, this);
    }
}

arr.myForEach((el, index, array)=>console.log(el, index))


// MAP

/**
 * 
    Feature                   forEach()                                       map()
Returns a new array             No                                              Yes
Mutates the original array      Yes                                             No
Chainable                       No                                              Yes
Use case                        Iterate over an array                           Iterate over an array 
                                and perform a side effect,                      and transform each element 
                                such as logging each element                    into a new value, such as 
                                to the console.                                 squaring each number in the array.
 */

arr.map(el =>  el*2);

Array.prototype.myMap = function(cb){
    let res= [];
    for (let index = 0; index < this.length; index++) {
        res.push(cb(this[index], index, this));
    }
    return res;
}

const temp = arr.myMap(el=> el*2);

console.log(temp)



// FILTER
const arrFilter = [1,2,3,4,5,6];


const tempFilter = arrFilter.filter(el => el>4)


Array.prototype.myFilter= function(cb) {
  
  let res = [];
  for (var i = 0; i < this.length; i++) {
    let temp = cb(this[i], i, this)
    if(temp) res.push( this[i]);
  }
  return res;
 
}

const temp2 = arrFilter.myFilter(el => el>4)


console.log(temp, temp2, arrFilter);



// REDUCE 

const arrReduce = [1,2,3,4,5,6];


const tempReduce = arrReduce.reduce((a,c) => a+c, 0)


Array.prototype.myReduce= function(cb, initVal) {
  let acc = initVal;
   
  for (var i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]): this[i]
   
  }
  return acc;
   
}

const temp2Reduce = arrReduce.reduce((a,c) => a+c, 0)


console.log(tempReduce, temp2Reduce  );
