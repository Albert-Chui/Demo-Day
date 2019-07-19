
// const input = 
// const inputValue = 
// const output =


/*document.querySelector(".noline")= function myFunction() {
var hi = document.querySelector(".noline").value;
var res = hi.toUpperCase();
hi.innerHTML = res;
}*/


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
var i = 0
function replace()  {
     var str = document.querySelector(".noline").value;
    var res = str.charAt(i++);
    document.querySelector("noline").innerHTML = res;
}

var replaceValues = {
    'string' : 'text',
    'foo' : 'bar'
}
 

//  MEMORY2
console.log('running')
//first make an empty array
var list = []
// make array with correct answers
var list1 = ["yawn", "dog", "jog", "chop", "pop"];
var hidden = document.getElementById("new");
hidden.style.display = "none";
//add button for input then make an event handler for that button
document.querySelector('#y').onclick = function(){
    var input = document.getElementById('text').value;
     
    console.log('funcion started')
    // console.log(list1.length);
    //if else statement 
    

    
    
        for (let i=0; i < list1.length; i++) {
            if (input == list1[i]) {
                list[i]=input;
                console.log('correct'); 
                document.getElementById('result').innerHTML = 'correct';
                break;
            } else {
                console.log('incorrect');
                document.getElementById('result').innerHTML = 'incorrect';
            }
        
        
    }
    let b = 0;
    for (let j=0; j < list1.length; j++) {
        if (list[j] == list1[j]){
            b++; 
            console.log(b);
            if (b == list1.length) {
                hidden.style.display="block"
                break;
            }
        }
    }
    
    //if (list == list1){
        
    //     console.log('everything is cooreet');
    //     hidden.style.display = "block";

    // }

}

jQuery(".noline").keydown(function(){
    jQuery(".noline").css("background-color", "pink");
  });

  /*/ Get the input box
var textInput = document.getElementById('test-input');
// then also make it 1 letter per box
// Init a timeout variable to be used below
var timeout = null;

// Listen for keystroke events
textInput.onkeyup = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log('Input Value:', textInput.value);
    }, 300);
};*/
//make a function to add user input to array
//if else statement 

/*var userA =  document.querySelector(".answerU").value 
function cli() {
    if userA = j || 
}*/
