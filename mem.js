// function Myfunction() {
//     var hi = document.querySelector(".square").value
//     var res = hi.toUpperCase()
//     res = document.querySelector(".square").innerHTML 
//     }
    
//     function changeText(text)
//     {
//         var display = document.getElementById('text-display');
//         display.innerHTML = "";
//         display.innerHTML = text;
//     }
         
//     function defaultText()
//     {
//         var display = document.getElementById('text-display');
//         display.innerHTML = "";
//         display.innerHTML = ":Your Hint Here:";
//     }
    //  MEMORY2
    console.log('running')
    //first make an empty array
    var list = []
    // make array with correct answers
    var list1 = ["ocean", "apple", "snail", "lock", "smog", "trap", "smack"];
    // var hide = document.getElementById("new");
    // hide.style.display = "none";
    document.getElementById("new").style.display = "none";
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
    
    