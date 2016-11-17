var userInput = prompt("Enter a number between 1 - 10,000 here")
if (userInput == NaN) {
    alert("Please try again")
} else if (userInput > 10000) {
    alert("Please try again")
} else {
    function collatzNumber() {
        var n = userInput
        var steps = 0
        while (n > 1) {
            if (n % 2 === 0) {
                n / 2;
                steps += 1;
            } else if (n % 2 === 1) {
                n * 3 + 1;
                steps += 1;
            }
        }
        alert(steps)
    }
}
