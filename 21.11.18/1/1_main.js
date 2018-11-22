var range = (value_1,value_2, step) => { 
    if (step == null){
        step = 1;
    }
    var arr =[]; 
    if (step > 0){
        while (Math.abs(value_1) < Math.abs(value_2+1)){
            arr.push(value_1);
            value_1 += step;
        } 
    }
    else{
        while (Math.abs(value_1) > Math.abs(value_2-1)){
            arr.push(value_1);
            value_1 += step;
        }
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
console.log(range(5,2,-1));
