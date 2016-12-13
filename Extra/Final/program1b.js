var initialValue = parseInt(prompt("Please enter your starting value here"));
var finalValue = parseInt(prompt("Please enter where you want the counter to stop"));
var increment = parseInt(prompt("Please enter how much you want your values to increase by"));

var countFunction = function(){
  var i = initialValue;
  var f = finalValue;
  var a = [];
  for(i; i < f; i + increment){
    i += increment;
    a.push(i);
  }
  alert(a);
}
countFunction()
