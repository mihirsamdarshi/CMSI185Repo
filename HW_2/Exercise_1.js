document.getElementById("execute").onclick = function() {
    var firstValue = document.getElementById("firstInput").value;
    var secondValue = document.getElementById("secondInput").value;
    document.write(<table>);
      for (secondValue != 1,)
        document.write("<tr>" "<td>" firstValue * 2 "<tr>" "</td>");
        firstValue = firstValue * 2
        document.write("<tr>" "<td>" Math.floor(secondValue / 2) "<tr>" "</td>")
        secondValue = secondValue % 2

/* I need to write a loop that writes to each column, and overwrites the variable
for each value with the value affected by the operation. I then need to write an if/
else statement embedded in this for-loop for the second column that determines whether
it is even or odd (ideally using the modulo statement, and saying if !=0 then replace
that number with the crossed out version of that number). I need to apply this across
the column. I then add all the numbers in the first column that are not crossed out.
Finally I need to write a statement that appends the footer with the final value.
