// MEMORY4
console.log('running')
//first make an empty array
var list = []
// make array with correct answers
var list1 = ["apple", "snail", "ocean", "jock", "smog", "strap", "smack"];
var hidden = document.getElementById("new");
hidden.style.display = "none";
//add button for input then make an event handler for that button
document.querySelector('#o').onclick = function(){
    var input = document.getElementById('text').value;
     
    console.log('funcion started')
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
        
    }if (list.length == list1.length){
        
        console.log('everything is cooreet');
        hidden.style.display = "block";

    }
}
