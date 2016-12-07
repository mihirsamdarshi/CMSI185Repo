var lowNum = prompt("Enter your lower number here")
var highNum = prompt("Enter your higher number here")

var randomNum = function(lowNum, highNum){
  Math.floor(Math.random() * highNum) + lowNum
}

randomNum()
