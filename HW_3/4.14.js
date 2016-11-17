var userInput = prompt("Enter words here")

function repeatedPrompt(){
  userInput = prompt("Enter words here again")
}

if (userInput = null){
  alert("The script has run its course")
}
else{
  alert(userInput.charAt(Math.floor(Math.random * userInput.length))) && repeatedPrompt()
}
