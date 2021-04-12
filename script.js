// scrivo i numeri da 1 a 100



var multiplo3 = i % 3 === 0;
var multiplo5 = i % 5 === 0;





for(var i = 0; i <= 100; i++){

    // per ogni numero multiplo di 3 e di 5 che il ciclo trova devo scrivere "FizzBuzz"
    if ( (i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz")
    // per ogni numero multiplo di 3 che il ciclo trova devo scrivere "Fizz"
    }if (i % 3 === 0){
    console.log("Fizz")
    }
    // per ogni numero multiplo di 5 che il ciclo trova devo scrivere "Buzz"
    else if ( i % 5 === 0){
    console.log("Buzz")
    }else {
    console.log(i)
    }
}

