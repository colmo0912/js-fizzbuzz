// scrivo i numeri da 1 a 100



var multiplo3 = i % 3 === 0;
var multiplo5 = i % 5 === 0;



// per ogni numero multiplo di 3 che il ciclo trova devo scrivere "Fizz"

for(var i = 0; i <= 100; i++){
    
    if (i % 3 === 0){
        console.log("Fizz")
    }else if ( i % 5 === 0){
        console.log("Buzz")
}   else if ( i % 5 === 0 ||  i % 5 === 0){
    console.log("FizzBuzz")
}  else {

    console.log(i)
    }
}