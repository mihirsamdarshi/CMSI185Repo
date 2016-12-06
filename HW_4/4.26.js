var SMALLEST = 2;
var BIGGEST = 9E15;

var n = prompt("Enter a number and check if it is prime");

if (isNaN(n) || n < SMALLEST || n > BIGGEST || n % 1 !== 0){
    alert("I can only test integers between " + SMALLEST + "and " + BIGGEST);
}
else if(n % 2 == 0) {
    alert(n + " is not prime");
}
else {
    for (var k = 3, last = Math.sqrt(n); k <= last; k++) {
        if (n % k == 0) {
            alert(n + " is not prime");
            break;
        }
        else{
          alert(n + " is prime")
        }
    }
}
