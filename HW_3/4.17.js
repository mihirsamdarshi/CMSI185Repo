var userInput = prompt("Enter a number between 1 - 10,000 here")
for(userInput < 100000, userInput ) {
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
