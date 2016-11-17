document.getElementById('calculate').onclick = function() {  
    var a = parseInt(document.getElementById('a').value)
    var b = parseInt(document.getElementById('b').value)
    var c = parseInt(document.getElementById('c').value)
    var discriminant = Math.sqrt((b * b) - (4 * a * c))
    var answer1 = (-b + discriminant) / (2 * a)
    var answer2 = (-b - discriminant) / (2 * a)
    document.getElementById('output').innerHTML = answer1 + " and " + answer2
}
