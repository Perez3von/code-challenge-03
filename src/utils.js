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


export function getHouses(arr) {
    const res = arr.sort((a, b)=>{
        return a.children.length - b.children.length;
    });

    return res.map(obj=>obj.house);
}

export function updateNumbers(obj) {
    let arr =[]
    for (const [key, val] of Object.entries(obj)) {
        arr.push(`${key}: ${val}`);
      }
return arr;
      
}


export function totalCharacters(arr) {

let total =0;

arr.map((obj) => {

    if(obj.spouse !== null){

        total = total + 2 + obj.children.length;  
    }
    else{
        total = total+ 1 + obj.children.length;
    }
    return 0;
     
})

return total;

}




export function hasChildrenEntries(arr, character) {
    for( let [key, value] of Object.entries(arr)){
       if( value.name === character && value.children !== []){
           return true;
       } else {
           return false;
       }
    }
 } 
 

 export function sortByChildren(arr){
    return arr.sort((a, b)=>{
          return a.children.length - b.children.length;
      })
      
     }

     export function howMuchPencil(str) {

        let res=[]
        for(let i = 0; i<str.length+1; i++){
            res.push(str.slice(i))
            }
            return res;
    
    }

    export function wordsToCharList(arr) {
        return arr.split('');
    }
    
    export function listFoods(recipe){
        return recipe.ingredients.map((item) => {
            return item.split(' ').splice(2).join(' ');
        })    
      }
    
      export function stepActions(recipe){
        return recipe.steps.map((item)=> {
            return item.split(' ').shift();
        });
    }
    
    export function removeLastCharacters(str, numberOfCharacters){
        if(numberOfCharacters > str.length){
          return '';
    } else if (Math.sign(numberOfCharacters)!== 1 ){
        return str;
    }else {
        return str.slice(0, -numberOfCharacters);
    }
    }


    export function returnTen(str) {
        let arr = [];
        if(str.length >= 10){
          
          for(let i = 1; i<=10; i++){
            
            arr.push(str[str.length-i]);
              
            }
        }
        else{return [...str]}
         
        return arr.reverse();
    
    }


    export function findMax(matrix) {

        let max = 0;

        matrix.map((arr) =>(

        arr.map(ele => {if(ele>max){max = ele} return max})

         ))

         return max;
    
    }

    
    export function totalSum(matrix) {

        let max = 0;

        matrix.map((arr) =>(

        arr.map(ele => {return max = max + ele})

         ))

         return max;
    
    }


    export function salesData(hours, data){
        let arr =[];

        for(let i=0;i<hours.length;i++){

            arr.push({sales:`${data[i]} cookies`,
            time:hours[i]})
        }
        return arr;
    
    }

export function grandTotal(stores){


    let arr =[];

     for(let i =0; i<stores[0].length;i++){
         let sum =0;
         
         for(let j =0; j<stores.length;j++){
            sum = stores[j][i] + sum;
            
     }
     arr.push(sum);
}

return arr;


}