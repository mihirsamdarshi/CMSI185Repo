var countFunction = function() {
  var initialValue = parseInt(document.getElementById("init").value);
  var finalValue = parseInt(document.getElementById("final").value);
  var increment = parseInt(document.getElementById("increase").value);

  console.log(initialValue);
  console.log(finalValue);
  console.log(increment);

  var i = initialValue;
  var f = finalValue;
  var a = [];
  for(i; i < f; i + increment){
    i += increment;
    a.push(i);
  }
document.getElementById("output").innerHTML = a
}
