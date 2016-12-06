var SMALLEST = 2;
var BIGGEST = 9E15;

var foundDivisor = false;

var n = prompt("Enter a number and	check if it is prime");
if(isNaN(n) || n < SMALLEST || n > BIGGEST || n % 1 !== 0) {
    alert("I can only test integers between " + SMALLEST +
        "and " + BIGGEST);
}

else{
  if(n % 2 == 0){
    foundDivisor = true;
    }
  else{
    for(k = 3, k < Math.sqrt(n), k++){
      if(n % k == 0){
        foundDivisor = true;
        }
      }
    }
  if(foundDivisor = true){
    alert(n + " is " + (foundDivisor ? "not " : "") + "prime");
  }
  else{
    alert(n + " is" + " prime")
  }
}
