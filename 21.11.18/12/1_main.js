var range = (value_1,value_2, step) => { 
    var arr =[], n = Math.max(value_1,value_2), c = Math.min(value_1,value_2);
        while (c <= n){
            arr.push(c);
            c += step;
        } 
    return arr; 
} 

    
var sum = (array) => { 
    var summa = 0; 
    for (var i = 0; i < array.length; i++){ 
        summa += array[i]; 
    } 
    return summa; 
}

//console.log(sum(range(1,10,2))); 
console.log(range(5,2,1));
