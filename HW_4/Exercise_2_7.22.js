var str = prompt("Enter a string")
var revStr = ""
var i
for(i = str.length - 1; i >= 0; i--) {
  revStr += str.charAt(i)
}
alert(revStr)
