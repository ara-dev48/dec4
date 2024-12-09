function unique(arr) {
    return [...new Set(arr)];
}


function flatten(arr){
    if(!Array.isArray(arr)){
        throw new Error('Only array should be passed to the function')
    }
    let flattenArr = []
    for (let i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i])){
            flattenArr.push(arr[i])
        }
        else{
            flattenArr = flattenArr.concat(flatten(arr[i]))
        }
    }
    return flattenArr
}


function chunk(arr, size){
    if(!Array.isArray(arr)){
        throw new Error('Only array should be passed to the function')
    }
    if (typeof size !== "number" || size <= 0) {
        throw new Error("Invalid size")
    }
    let arrs = []
    let copy = [...arr]
    while(true){
        arrs.push(copy.splice(0,size))
        if(copy.length < size){
            if(copy.length !== 0){
                arrs.push(copy) /* In the case when there are several arrays with
                the length of 'size'(passed as argument) and in the array copy there are
                some elements left(with quantity less than 'size'), they form an array
                with the length of their quantity and that array is also being added
                to the collection of arrays (arrs).
                chunk([1,2,3,4,5,6,7,8,9,10,11],3) returns [[1,2,3],[4,5,6],[7,8,9],[10,11]]
                */ 
            }
            break
        }
    }
    return arrs
}


module.exports = { unique, flatten, chunk };