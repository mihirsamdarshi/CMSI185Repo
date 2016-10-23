var favoriteSongs = new Array();

favoriteSongs[0] = "Starboy - The Weeknd";
favoriteSongs[1] = "RaRa - Travis Scott";
favoriteSongs[2] = "Scott and Ramona - Lil Uzi Vert";
favoriteSongs[3] = "Lost - Frank Ocean";
favoriteSongs[4] = "Hold My Liquor - Kanye West";
favoriteSongs[5] = "Zaddy - Ty Dolla $ign";
favoriteSongs[6] = "1901 - Phoenix";
favoriteSongs[7] = "Loud Places - Jamie xx";
favoriteSongs[8] = "White Lies - ODESZA";
favoriteSongs[9] = "Fortunate Son - Creedence Clearwater Revival";

var size = favoriteSongs.length;

var createTable = function() {
  var newTable = "<table>";
  for (var i = 0; i < 10; i++) {
    newTable += "<tr><td>" + favoriteSongs[i] + "</td></tr>";
  };
  newTable += "</table>";
  document.getElementById("tableOutput").innerHTML = newTable;
};

var doPush = function() {
  var newFavoriteSong = document.getElementById("newFavoriteSong").value;
  var retVal = confirm("Are you sure you want to add " + newFavoriteSong + "?");
  if (retVal == true, size != 10) {
    favoriteSongs.push(newFavoriteSong);
    size++;
  } else if (retVal == true, size === 10) {
    alert("The list is full!");
  } else if(retVal == false) {}
};

var doPop = function() {
  var retVal = confirm("Are you sure you want to remove " + favoriteSongs[9] + "?");
  if (retVal == true, size != 0) {
    favoriteSongs.pop();
    size--;
  } else if(retVal == true, size === 0) {
    alert("The list is empty!");
  } else if (retVal == false) {};
  alert(size);
};
