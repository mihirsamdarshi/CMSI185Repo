a = [5, 6, 7]
var sum = function(a) {
  var result = 0;
  for(var i = 0; i < a.length; i += 1){
    result += a[i];
  }
  alert(result);
}

sum()
