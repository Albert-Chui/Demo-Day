
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


//make a function to add user input to array
//if else statement 

/*var userA =  document.querySelector(".answerU").value 
function cli() {
    if userA = j || 
}*/
