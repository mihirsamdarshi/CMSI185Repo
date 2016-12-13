var penIsLand = function(){
  var link = prompt("Enter your favorite link here")
  var doYouWantThis = confirm("Are you sure?")
  if(doYouWantThis = true){
    document.location.href(link);
  }
}
penIsLand()
