var string = prompt("Enter your string in here")
var letter = prompt("Enter the letter you want to check for here")

function checkLetter() {
    var n = string.split("");
    var letterArray = []
    var i = 0
    while (i < n.length) {
        if (i = n.indexOf(letter)){
            letterArray.push(i)
        };
        i++;
    }
    var length = letterArray.length;

    console.log(n);
    console.log(letterArray);
    console.log(length);
}

checkLetter()
