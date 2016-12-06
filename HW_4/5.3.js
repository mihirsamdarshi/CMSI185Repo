function averageOfAnArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum/array.length;
  }
  return average;
}

averageOfAnArray()
