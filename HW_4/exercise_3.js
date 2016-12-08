document.getElementById('calculate').onclick = function () {
  var num = parseInt(document.getElementById('input').value * 100)
  var ones = 0
  var fives = 0
  var tens = 0
  var twentyFive = 0
  var fifty = 0


  while(num >= 5) {
    if(num - 50 >= 0) {
      num = num - 50
      fifty++
    } else if(num - 25 >= 0) {
      num = num - 25
      twentyFive++
    } else if(num - 10 >= 0) {
      num = num - 10
      tens++
    } else if(num - 5 >= 0) {
      num = num - 5
      fives++
    }
  }
  ones = num
  if(num >= 0) {
    document.getElementById('output').innerHTML = '50s: ' + fifty + '<br>' + '25s: ' + twentyFive + '<br>' +
     '10s: ' + tens + '<br>' + '5s: ' + fives + '<br>' + '1s: ' + ones
  } else {
    alert('Error: Input is not a number')
  }
}
