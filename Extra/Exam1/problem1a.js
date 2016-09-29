  var initialValue = prompt("Please enter your starting value here");
  var finalValue = prompt("Please enter where you want the counter to stop");
  var increment = prompt("Please enter how much you want your values to increase by");

  while (initialValue < finalValue) {
      initialValue = initialValue + increment;
      alert(initialValue);
      $("#footer").append("<div>" + initialValue + "</div>");
  };
