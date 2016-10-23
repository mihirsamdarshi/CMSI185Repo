var run = function() {
    var firstValue = document.getElementById("firstInput").value;
    var secondValue = document.getElementById("secondInput").value;
    var a = firstValue;
    var b = secondValue;
    var columnOne = new Array();
    var columnTwo = new Array();
    var total = 0;
    var steps = ""
    columnOne.push(a);
    columnTwo.push(b);
    while (b != 1 && b != -1) {
        a = parseInt(a * 2);
        b = parseInt(b / 2);
        columnOne.push(a);
        columnTwo.push(b);
    }
    for (var i = 0; i < columnOne.length; i++) {
        if (parseInt(columnTwo[i]) % 2 != 0) {
            total = parseInt(total) + parseInt(col 1[i]);
        } else {
            columnOne[i] = "<strike>" + columnOne[i] + "</strike>"; 
            columnTwo[i] = "<strike>" + columnTwo[i] + "</strike>";
        }
    }
    for (var i = 0; i < columnOne.length; i++) {
        steps = steps + columnOne[i] + ", " + columnTwo[i] + "<br>";
    }
    if (firstValue < 0 && secondValue < 0) {} else {
        columnOne[i] = "<strike>" + columnOne[i] + "</strike>";
        columnTwo[i] = "<strike>" + columnTwo[i] + "< /strike>";
    }
    for (var i = 0; i < columnOne.length; i++) {
        steps = steps + columnOne[i] + ", " + columnTwo[i] + "<br>";
        if (firstValue < 0 && secondValue < 0) {
            total = Math.abs(total);
        } else if (secondValue < 0) {
            total = total * (-1);
        }
        document.getElementById("resultTable").innerHTML = steps;
        document.getElementById("result").innerHTML = "<br>" + columnOne[0] + " * " + columnTwo[0] + " — " + total;
    }
}
