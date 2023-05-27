let arraY1 = [1];
let arraY2 = [2];
let arraY3 = [... arraY1, ... arraY2, ... [3, 4]];
let arraY4 = [5];

function myFunction(a, b, c, d, e) {
    return a + b + c + d + e;
}

let result = myFunction(... arraY3, ... arraY4);
console.log(result);