
// const input = 
// const inputValue = 
// const output =


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
 
console.log('running')
//first make an empty array
var list = []
// make array with correct answers
var list1 = ["yawn", "dog", "jog", "chop", "pop"];
//add button for input then make an event handler for that button
document.querySelector('#y').onclick = function(){
    var input = document.getElementById('text').value;
        
    console.log('funcion started')
    //if else statement 
    

    
    
        for (let i=0; i < list1.length; i++) {
            if (input == list1[i]) {
                list[i]=input;
                console.log('correct'); 
                break;
            } else {
                console.log('incorrect');
                
            }
        
    }if (list.length == list1.length){
        var div = ( document.all ) ? document.all['myDiv'] : document.getElementById('myDiv');
        div.innerHTML = '<a href="memory3.html"><button class="button1">Click to continue</button></a>';
        console.log('everything is cooreet');

    }

}
//make a function to add user input to array
// function () {}
