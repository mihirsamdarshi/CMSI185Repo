  var initialValue = parseInt(prompt("Please enter your starting value here"));
  var finalValue = parseInt(prompt("Please enter where you want the counter to stop"));
  var increment = parseInt(prompt("Please enter how much you want your values to increase by"));
  $("#footer").append("<div>" + initialValue + "</div>");
  while (initialValue < finalValue) {
      initialValue = initialValue + increment;
      $("#footer").append("<div>" + initialValue + "</div>");
  };
