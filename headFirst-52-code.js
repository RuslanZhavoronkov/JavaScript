var input = "jenny@wickedlysmart.com";
for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "@") {
        console.log ("There's an @ sign at index " + i);
    }
}