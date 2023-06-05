let a = 0;
//let a = 1; //SyntaxError
console.log(a);

function myFunction () {
    let b = 2;
    //let b = 3;//SyntaxError

    console.log(b);

    if(true) {
        let c = 4;
        //let c = 5;//SyntaxError
    }

    console.log(c);
}

myFunction();