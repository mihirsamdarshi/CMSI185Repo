var storedValue = {
    num: 0,
    operation: "+"
}
document.getElementById("one").onclick = function() {  
        document.getElementById("input").value = 1
    }
document.getElementById("two").onclick = function() {  
        document.getElementById("input").value = 2
    }
document.getElementById("three").onclick = function() {  
        document.getElementById("input").value = 3
    }
document.getElementById("four").onclick = function() {  
        document.getElementById("input").value = 4
    }
document.getElementById("five").onclick = function() {  
        document.getElementById("input").value = 5
    }
document.getElementById("six").onclick = function() {  
        document.getElementById("input").value = 6
    }
document.getElementById("seven").onclick = function() {  
        document.getElementById("input").value = 7
    }
document.getElementById("eight").onclick = function() {  
        document.getElementById("input").value = 8
    }
document.getElementById("nine").onclick = function() {  
    document.getElementById("input").value = 9
}
document.getElementById("zero").onclick = function() {  
    document.getElementById("input").value = 0
}

document.getElementById("clear").onclick = function() {  
        document.getElementById("input").value = ""  
        document.getElementById("output").innerHTML = ""
    }
document.getElementById("plus").onclick = function() {  
        storedValue.num = document.getElementById("input").value
        storedValue.operation = "+"  
        document.getElementById("input").value = ""
    }
document.getElementById("minus").onclick = function() {  
        storedValue.num = document.getElementById("input").value
        storedValue.operation = "-"  
        document.getElementById("input").value = ""
    }
document.getElementById("multiply").onclick = function() {  
        storedValue.num = document.getElementById("input").value
        storedValue.operation = "*"  
        document.getElementById("input").value = ""
    }
document.getElementById("divide").onclick = function() {  
    storedValue.num = document.getElementById("input").value
    storedValue.operation = "/"  
    document.getElementById("input").value = ""
}
document.getElementById("equals").onclick = function() {  
    var outputStr  
    var currentNum = document.getElementById("input").value  
    var finalNum  
    if (storedValue.operation == "+") {      
        finalNum = storedValue.num + currentNum
        outputStr = storedValue.num + " + " + currentNum + " = " + finalNum  
    } else if (storedValue.operation == "-") {      
        finalNum = storedValue.num - currentNum
        outputStr = storedValue.num + " - " + currentNum + " = " + finalNum  
    } else if (storedValue.operation == "*") {      
        finalNum = storedValue.num * currentNum
        outputStr = storedValue.num + " * " + currentNum + " = " + finalNum  
    } else {      
        finalNum = storedValue.num / currentNum
        outputStr = storedValue.num + " / " + currentNum + " = " + finalNum  
    }  
    document.getElementById("output").innerHTML = outputStr
    document.getElementById("input").value = finalNum
}
