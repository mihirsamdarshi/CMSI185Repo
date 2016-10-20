document.getElementById("roller").onclick = function() {
    document.getElementById("die").innerHTML =
        "&#" + (9856 + Math.floor(Math.random() * 6))
    ":";
    document.getElementById("die2").innerHTML =
        "&#" + (9856 + Math.floor(Math.random() * 6))
    ":";
}
