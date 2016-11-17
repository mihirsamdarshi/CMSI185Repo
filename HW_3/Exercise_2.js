Multiplication_webpage_javascript.js
    //initializes an object of type action with 0 and + as its defaults
var save = {
    num: 0,
    operation: '+'
}

//types in number 1
document.getElementById('one').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 1
    }
    //types in number 2
document.getElementById('two').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 2
    }
    //types in number 3
document.getElementById('three').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 3
    }
    //types in number 4
document.getElementById('four').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 4
    }
    //types in number 5
document.getElementById('five').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 5
    }
    //types in number 6
document.getElementById('six').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 6
    }
    //types in number 7
document.getElementById('seven').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 7
    }
    //types in number 8
document.getElementById('eight').onclick = function() {  
        document.getElementById('input').value = (document.getElementById('input').value * 10) + 8
    }
    //types in number 9
document.getElementById('nine').onclick = function() {  
    document.getElementById('input').value = (document.getElementById('input').value * 10) + 9
}


//types in number 0
document.getElementById('zero').onclick = function() {  
    document.getElementById('input').value = (document.getElementById('input').value * 10)
}



//clears input box when clear in clicked
document.getElementById('clear').onclick = function() {  
        document.getElementById('input').value = ''  
        document.getElementById('output').innerHTML = ''
    }
    //saves input number and + as operation, then clears the text input box
document.getElementById('plus').onclick = function() {  
        save.num = document.getElementById('input').value   save.operation = '+'  
        document.getElementById('input').value = ""
    }
    //saves input number and - as operation, then clears the text input box
document.getElementById('minus').onclick = function() {  
        save.num = document.getElementById('input').value   save.operation = '-'  
        document.getElementById('input').value = ""
    }
    //saves input number and * as operation, then clears the text input box
document.getElementById('multiply').onclick = function() {  
        save.num = document.getElementById('input').value   save.operation = '*'  
        document.getElementById('input').value = ""
    }
    //saves input number and / as operation, then clears the text input box
document.getElementById('divide').onclick = function() {  
    save.num = document.getElementById('input').value   save.operation = '/'  
    document.getElementById('input').value = ""
}

//takes number stored and number in input box and does specified operation
//puts string with answer into running log at bottom of page
document.getElementById('equals').onclick = function() {  
    var outputStr  
    var currentNum = document.getElementById('input').value  
    var finalNum  
    if (save.operation == '+') {      
        finalNum = +save.num + +currentNum       outputStr = save.num + " + " + currentNum + " = " + finalNum  
    } else if (save.operation == '-') {      
        finalNum = save.num - currentNum       outputStr = save.num + " - " + currentNum + " = " + finalNum  
    } else if (save.operation == '*') {      
        finalNum = save.num * currentNum       outputStr = save.num + " * " + currentNum + " = " + finalNum  
    } else {      
        finalNum = save.num / currentNum       outputStr = save.num + " / " + currentNum + " = " + finalNum  
    }  
    document.getElementById('output').innerHTML = outputStr   document.getElementById('input').value = finalNum
}
