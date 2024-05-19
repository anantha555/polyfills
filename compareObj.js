const isObject = obj => obj != null && typeof obj == 'object';

function compareObjects(o1, o2){
    const k1= Object.keys(o1);
    const k2 =Object.keys(o2);
    
    if(k1.length !== k2.length) return false;
    
    for(let key of k1){
        const v1 = o1[key];
        const v2 = o2[key];
        const isObjects = isObject(v1) && isObject(v2);
        
        if(!isObjects && v1 !== v2) return false;
        
        if(isObjects && !compareObjects(v1,v2)) return false;
        
    }
        return true
}


const a= {a:1, b:2, c:{d:[4,5]}};
const b= {a:1, b:2, c:{d:[4,5]}};

console.log(compareObjects(a,b))