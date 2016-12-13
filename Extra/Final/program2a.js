var isLand = function(){
  var link = prompt("Enter your favorite link here")
  var doYouWantThis = confirm("Are you sure?")
  if(doYouWantThis = true){
    document.location.reload(link);
  }
}
isLand()
