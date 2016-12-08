var string = prompt("Enter your string in here")
var letter = prompt("Enter the letter you want to check for here")

function checkLetter() {
    var n = string.split("");
    var letterArray = []
    var i = 0
    while (i < n.length) {
        if (n[i] == letter){
            letterArray.push(i)
        };
      i++;
    }
    var length = letterArray.length;

    alert(length);
}

checkLetter()
