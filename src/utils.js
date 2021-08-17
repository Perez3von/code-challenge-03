export function sortedKeys(obj) {
    
    return Object.keys(obj).sort((a,b)=> (a.length - b.length));
    
}

export function getFilteredKey(obj) {

  return Object.keys(obj).filter(item => item === 'age');
}

export function getArrayOfKeysAndValues(obj){
    let main_arr = [];
    for(let key in obj){

        let arr =['',''];
        arr[0]=key;
        arr[1]=obj[key];
        main_arr.push(arr);
        
    };
    return main_arr;

}

export function sortedArraysByValuesLength(obj) {
    let main_arr = [];
    for(let key in obj){

        let arr =['',''];
        arr[0] = key;
        arr[1] = obj[key];
        main_arr.push(arr);

    };
return main_arr.sort((a, b) => b[1].length - a[1].length);

}
