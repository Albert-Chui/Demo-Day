var you = "killed"
if (you = 'killed') {
     you = 'are dead'
}
else (you = "alive?")

function Myfunction() {
var hi = document.querySelector(".square").value
var res = hi.toUpperCase()
document.querySelector(".square").innerHTML = res
}
function changeText(text)
{
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
}
     
function defaultText()
{
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = ":Your Hint Here:";
}
 