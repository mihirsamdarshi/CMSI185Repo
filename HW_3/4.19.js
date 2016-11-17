var input = prompt("Enter a string in here");
var words = input.split(" ");
var result = ""
for (var i = 0; i < words.length; i += 1) {
    result += words[i].charAt(0).toUpperCase();
}
alert(result);
