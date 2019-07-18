console.log('running')
//first make an empty array
var list = []
// make array with correct answers
var list1 = ["hop", "sob", "knot", "drop", "sock"];
// var hide = document.getElementById("new");
// hide.style.display = "none";
document.getElementById("new").style.display = "none";
//add button for input then make an event handler for that button
document.querySelector('#m').onclick = function(){
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
        
     }
     let b = 0;
     for (let j=0; j < list1.length; j++) {
         if (list[j] == list1[j]){
             b++; 
             console.log(b);
             if (b == list1.length) {
                 document.getElementById("new").style.display = "block";
                 break;
             }
         }
     }
     //if (list.length == list1.length){
        
    //     console.log('everything is cooreet');
    //     document.getElementById("new").style.display = "block";

    // }

}

