function century(year) {
    // Finish this :)
    var newStr = String(year);
    var ars = newStr.split(''); //массив из цифр года
    

        if (ars[ars.length - 1] > 0 || ars[ars.length - 2] > 0) {
            ars.pop();
            ars.pop();
            return Number(ars.join("")) + 1; 
        } else if(ars[ars.length - 1] == 0 || ars[ars.length - 2] == 0){
            ars.pop();
            ars.pop();
            return Number(ars.join(""));
        } else if (ars.length === 2) {
            return 1;
        }
    
}
