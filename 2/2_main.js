var a = 1;
for (var i = 1; i<101; i++){
    if ((i % 3 == 0) && (i % 5 != 0))
        console.log(i + ' Fizz');
    if ((i % 5 == 0) && (i % 3 != 0))
        console.log(i + ' Buzz');
    if ((i % 5 == 0) && (i % 3 == 0))
        console.log( i + ' FizzBuzz');  
}
