var newArray = []

function averageOfAnArray() {
  var sum = 0;
  for (var i = 0; i < newArray.length; i++) {
    sum += newArray[i];
    var average = sum/newArray.length;
  }
  return average;
}

averageOfAnArray()
