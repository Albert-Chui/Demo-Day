window.onload = function() {
    console.log('running')

    var list = []
    
    var list1 = ["shoot", "blue", "orange", "green", "sock", "rock", "cat", "fox", "paper", "desert"];
  
    document.getElementById("new").style.display = "none";
    
    document.querySelector('#n').onclick = function(){
        var input = document.getElementById('text').value;
         
        console.log('funcion started')
  
        
    
        
        
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
    
    }
}
    
