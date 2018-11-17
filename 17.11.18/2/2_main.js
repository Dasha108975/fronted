var isEven = (value) => {
   if (value == 0){
       return 'true';
   }
   if (value == 1){
    return 'false';
    }
    if (value < 0){
        value *= (-1);
        return isEven(value);
    }
    else return isEven(value -= 2);
}

console.log (isEven(50) + '\n');
console.log (isEven(75));
console.log ( isEven(-1));
