  var initialValue = prompt("Please enter your starting value here");
  var finalValue = prompt("Please enter where you want the counter to stop");
  var increment = prompt("Please enter how much you want your values to increase by");

  while (initialValue < finalValue) {
      initialValue = initialValue + increment;
      $("#footer").append("<div>" + initialValue + "</div>");
  };

var pennies = prompt("Enter a number of pennies")
var dollars = Math.floor(pennies / 100)
var cents = pennies % 100
if (dollars > 1) {
  alert("That's " + dollars + " dollar and " + cents + " cents.")
}

else if (dollars = 0) {
  alert("That's " + dollars + " dollars and " + cents + " cents.")
}

else if (dollars = 1) {
  alert("That's " + dollars + " dollar and " + cents + " cents.")
}

else {
  alert("That's " + dollars + " dollars and " + cents + " cents.")
}
