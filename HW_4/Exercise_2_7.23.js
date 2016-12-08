document.getElementById('reverse').onclick  = function () {
  var str = document.getElementById("textField").value
  var revStr = ""
  var i
  for(i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i)
  }
  document.getElementById('textField').value = revStr
}
