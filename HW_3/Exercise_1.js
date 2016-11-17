document.getElementById("button").onclick = function() {
    var output = ""
    output += "<br>h1: " + document.getElementsByTagName("h1")[0].innerHTML
    output += "<br>input: " + document.getElementsByTagName("input")[0].value
    output += "<br>input: " + document.getElementsByTagName("input")[1].value
    output += "<br>p: " + document.getElementsByTagName("p")[0].innerHTML
    output += "<br>h2: " + document.getElementsByTagName("h2")[0].innerHTML
    output += "<br>img: " + document.getElementsByTagName("img")[0].alt
    output += "<br>h3: " + document.getElementsByTagName("h3")[0].innerHTML
    output += "<br>ol: " + document.getElementsByTagName("ol")[0].id
    output += "<br>h4: " + document.getElementsByTagName("h4")[0].innerHTML
    output += "<br>ul: " + document.getElementsByTagName("ul")[0].id
    output += "<br>table: " + document.getElementsByTagName("table")[0].id
    output += "<br>src: " + document.getElementsByTagName("script")[0].src
    document.getElementById("output").innerHTML = output
}
