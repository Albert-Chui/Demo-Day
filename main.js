
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
var drop= 1;
function change()  {
     var str = document.querySelector(".answerU").value;
     var res = 0;
     first_res = str.charAt(1);
     sec_res = str.charAt(2);
     thir_res = str.charAt(3);
     fourth_res = str.charAt(4);
     fifth_res = str.charAt(5);
     six_res = str.charAt(6);
     seven_res = str.charAt(7);
     eight_res = str.charAt(8);
     nine_res = str.charAt(9);
     ten_res = str.charAt(10);
     ele_res = str.charAt(11);
     twl_res = str.charAt(12);
     thirt_res = str.charAt(13);
     fourt_res = str.charAt(14);
     fift_res = str.charAt(15);
     sixt_res = str.charAt(16);
     seve_res = str.charAt(17);
     eighte_res = str.charAt(18);
     ninteen_res = str.charAt(19);
     twenty_res = str.charAt(20);
     ttw_res = str.charAt(21);
    if (drop="1_D") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
    }
    else if (drop="2_A") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
        dip.innerHTML = fifth_res;
        dip.innerHTML = res;
    }
    else if (drop="2_D") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
    }
    else if (drop="3_A") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
        dip.innerHTML = fifth_res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
    }
    else if (drop="4_D") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
    }
    else if (drop="5_D") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
        dip.innerHTML = fifth_res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
    }
    else if (drop="6_A") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
        dip.innerHTML = fifth_res;
    }
    else if (drop="7_A") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
        dip.innerHTML = fifth_res;
    }
    else if (drop="8_D") {
        dip.innerHTML = first_res;
        dip.innerHTML = sec_res;
        dip.innerHTML = thir_res;
        dip.innerHTML = fourth_res;
        dip.innerHTML = fifth_res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        dip.innerHTML = res;
        

    }

    
    dip.innerHTML = res;
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
