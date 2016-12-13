var a = [1, 4, 5, 6, 1, 4, 4, 6]
var c = []
var d = prompt("Enter element you want to look for")

function everyIndex() {
    for (i = 0; i < a.length; i++) {
        var b = a.indexOf(d, i)
        c.push(b);
    }
    alert(c)
}
