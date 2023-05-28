function myFunction([a, b, c = 3] = [1, 2]) {
    console.log(a, b, c);
}

myFunction(undefined);