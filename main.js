
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

var tdrop= "down"
var drop= 1;

//need a dropdown that changes drop variable to :2_A;2_D,etc.
var res = 0;

function functionone(one) {
 drop = 1;
 document.getElementById('answerU').value = '';
}
function functiontwo(two) {
    drop = 2;
    document.getElementById('answerU').value = '';
   }
   function functionthree(three) {
    drop = 3;
    document.getElementById('answerU').value = '';
   }
   function functionfour(four) {
    drop = 4;
    document.getElementById('answerU').value = '';
   }
   function functionfive(five) {
    drop = 5;
    document.getElementById('answerU').value = '';
   }
   function functionsix(six) {
    drop = 6;
    document.getElementById('answerU').value = '';
   }
function functionseven(seven) {
    drop = 7;
    document.getElementById('answerU').value = '';
   }
   function functioneight(eight) {
    drop = 8;
    document.getElementById('answerU').value = '';
   }
  function functiondown(down)  {
    tdrop = "Down";
    document.getElementById('answerU').value = '';
  }              
function functionacross(across){
   tdrop = "Across";
   document.getElementById('answerU').value = '';
}

function change()  {
    var stv = document.querySelector("#answerU").value;
    var str = stv.toUpperCase();

var first_res = str.charAt(0);
var sec_res = str.charAt(1);
var thir_res = str.charAt(2);
var fourth_res = str.charAt(3);
var fifth_res = str.charAt(4);
var six_res = str.charAt(5);
var seven_res = str.charAt(6);
var eight_res = str.charAt(7);
var nine_res = str.charAt(8);
var ten_res = str.charAt(9);
var ele_res = str.charAt(10);
var twl_res = str.charAt(11);
var thirt_res = str.charAt(12);
var fourt_res = str.charAt(13);
var fift_res = str.charAt(14); 
var sixt_res = str.charAt(15);
var seve_res = str.charAt(16);
var eighte_res = str.charAt(17);
var ninteen_res = str.charAt(20);
var twenty_res = str.charAt(21);
var ttw_res = str.charAt(22);
    if (tdrop="Down" && drop === 1) { 
        document.querySelector("._h_tml").innerHTML = first_res;
        document.querySelector(".h_t_ml").innerHTML = sec_res;
        document.querySelector(".ht_m_l").innerHTML = thir_res;
        document.querySelector(".htm_l_").innerHTML = fourth_res;
    }
    else if (tdrop="Across" && drop == 2) {
        document.querySelector("._c_ss").innerHTML = first_res;
        document.querySelector(".c_o_ding ").innerHTML = sec_res;
        document.querySelector(".co_d_ing").innerHTML = thir_res;
        document.querySelector(".cod_i_ng").innerHTML = fourth_res;
        document.querySelector(".codi_n_g").innerHTML = fifth_res;
        document.querySelector(".codin_g_").innerHTML = six_res;
    }
    else if (tdrop="Down" && drop == 2) {
        document.querySelector("._c_ss").innerHTML = first_res;
        document.querySelector(".main-js_s_").innerHTML = sec_res;
        document.querySelector(".cs_s_").innerHTML = thir_res;
    }
    else if (tdrop="Across" && drop == 3) {
        document.querySelector(".ht_m_l").innerHTML = first_res;
        document.querySelector(".m_a_in-jss ").innerHTML = sec_res;
        document.querySelector(".ma_i_n-jss").innerHTML = thir_res;
        document.querySelector(".mai_n_-jss").innerHTML = fourth_res;
        document.querySelector(".main_-_jss").innerHTML = fifth_res;
        document.querySelector(".main-_j_ss").innerHTML = six_res;
        document.querySelector(".main-j_s_s").innerHTML = seven_res;
        document.querySelector(".main-js_s_").innerHTML = eight_res;
    }
    else if (tdrop="Down" && drop == 4) {
        document.querySelector(".mai_n_-jss").innerHTML = first_res;
        document.querySelector(".n_a_v").innerHTML = sec_res;
        document.querySelector(".na_v_").innerHTML = thir_res;
    }
    else if (tdrop="Down" && drop == 5) {
        document.querySelector(".main-_j_ss").innerHTML = first_res;
        document.querySelector(".j_a_vascript").innerHTML = sec_res;
        document.querySelector(".ja_v_ascript").innerHTML = thir_res;
        document.querySelector(".jav_a_script").innerHTML = fourth_res;
        document.querySelector(".java_s_cript").innerHTML = fifth_res;
        document.querySelector(".javas_c_ript").innerHTML = six_res;
        document.querySelector(".javasc_r_ipt").innerHTML = seven_res;
        document.querySelector(".javascr_i_pt").innerHTML = eight_res;
        document.querySelector(".javascri_p_t").innerHTML = nine_res;
        document.querySelector(".javascrip_t_").innerHTML = ten_res;
    }
    else if (tdrop="Across" && drop == 7) {
        document.querySelector(".javascr_i_pt").innerHTML = first_res;
        document.querySelector(".i_n_dex").innerHTML = sec_res;
        document.querySelector(".in_d_ex").innerHTML = thir_res;
        document.querySelector(".ind_e_x").innerHTML = fourth_res;
        document.querySelector(".inde_x_").innerHTML = fifth_res;
    }
    else if (tdrop="Across" && drop == 6) {
        document.querySelector(".cs_s_").innerHTML = first_res;
        document.querySelector(".s_t_yle").innerHTML = sec_res;
        document.querySelector(".st_y_le").innerHTML = thir_res;
        document.querySelector(".sty_l_e").innerHTML = fourth_res;
        document.querySelector(".styl_e_").innerHTML = fifth_res;
    }
    else if (tdrop="Down" && drop == 8) {
        document.querySelector(".javascri_p_t").innerHTML = first_res;       
        document.querySelector(".p_r_ogramming").innerHTML = sec_res;
        document.querySelector(".pr_o_gramming").innerHTML = thir_res;
        document.querySelector(".pro_g_ramming").innerHTML = fourth_res;
        document.querySelector(".prog_r_amming").innerHTML = fifth_res;
        document.querySelector(".progr_a_mming").innerHTML = six_res;
        document.querySelector(".progra_m_ming").innerHTML = seven_res;
        document.querySelector(".program_m_ing").innerHTML = eight_res;
        document.querySelector(".programm_i_ng").innerHTML = nine_res;
        document.querySelector(".programmi_n_g").innerHTML = ten_res;
        document.querySelector(".programmin_g_").innerHTML = ele_res;
        }
}
var p = 0;
//button
document.querySelector("#bss").onclick = function(){


       if (p<1){ 
           p= 2;
        document.querySelector("._h_tml").innerHTML = "H";
        document.querySelector(".h_t_ml").innerHTML = "T";
        document.querySelector(".ht_m_l").innerHTML = "M";
        document.querySelector(".htm_l_").innerHTML = "L";
    

        document.querySelector("._c_ss").innerHTML = "C";
        document.querySelector(".c_o_ding ").innerHTML = "O";
        document.querySelector(".co_d_ing").innerHTML = "D";
        document.querySelector(".cod_i_ng").innerHTML = "I";
        document.querySelector(".codi_n_g").innerHTML = "N";
        document.querySelector(".codin_g_").innerHTML = "G";

        document.querySelector("._c_ss").innerHTML = "C";
        document.querySelector(".main-js_s_").innerHTML = "S";
        document.querySelector(".cs_s_").innerHTML = "S";

        document.querySelector(".ht_m_l").innerHTML = "M"
        document.querySelector(".m_a_in-jss ").innerHTML = "A";
        document.querySelector(".ma_i_n-jss").innerHTML = "I";
        document.querySelector(".mai_n_-jss").innerHTML = "N";
        document.querySelector(".main_-_jss").innerHTML = ".";
        document.querySelector(".main-_j_ss").innerHTML = "J";
        document.querySelector(".main-j_s_s").innerHTML = "S";
        document.querySelector(".main-js_s_").innerHTML = "S";

        document.querySelector(".mai_n_-jss").innerHTML = "N";
        document.querySelector(".n_a_v").innerHTML = "A";
        document.querySelector(".na_v_").innerHTML = "V";

        document.querySelector(".main-_j_ss").innerHTML = "J";
        document.querySelector(".j_a_vascript").innerHTML = "A";
        document.querySelector(".ja_v_ascript").innerHTML = "V";
        document.querySelector(".jav_a_script").innerHTML = "A";
        document.querySelector(".java_s_cript").innerHTML = "S";
        document.querySelector(".javas_c_ript").innerHTML = "C";
        document.querySelector(".javasc_r_ipt").innerHTML = "R";
        document.querySelector(".javascr_i_pt").innerHTML = "I";
        document.querySelector(".javascri_p_t").innerHTML = "P";
        document.querySelector(".javascrip_t_").innerHTML = "T";

        document.querySelector(".javascr_i_pt").innerHTML = "I";
        document.querySelector(".i_n_dex").innerHTML = "N";
        document.querySelector(".in_d_ex").innerHTML = "D";
        document.querySelector(".ind_e_x").innerHTML = "E";
        document.querySelector(".inde_x_").innerHTML = "X";
  
        document.querySelector(".cs_s_").innerHTML = "S";
        document.querySelector(".s_t_yle").innerHTML = "T";
        document.querySelector(".st_y_le").innerHTML = "Y";
        document.querySelector(".sty_l_e").innerHTML = "L";
        document.querySelector(".styl_e_").innerHTML = "E";

        document.querySelector(".javascri_p_t").innerHTML = "P";       
        document.querySelector(".p_r_ogramming").innerHTML = "R";
        document.querySelector(".pr_o_gramming").innerHTML = "O";
        document.querySelector(".pro_g_ramming").innerHTML = "G";
        document.querySelector(".prog_r_amming").innerHTML = "R";
        document.querySelector(".progr_a_mming").innerHTML = "A";
        document.querySelector(".progra_m_ming").innerHTML = "M";
        document.querySelector(".program_m_ing").innerHTML = "M";
        document.querySelector(".programm_i_ng").innerHTML = "I";
        document.querySelector(".programmi_n_g").innerHTML = "N";
        document.querySelector(".programmin_g_").innerHTML = "G";
    }
    else if (p = 2) {
        var bob = document.querySelector("#dog");
        bob.innerHTML= "";
        bob.innerHTML= "It's Gone";
        p = 6;

        document.querySelector("._h_tml").innerHTML = " ";
        document.querySelector(".h_t_ml").innerHTML = " ";
        document.querySelector(".ht_m_l").innerHTML = " ";
        document.querySelector(".htm_l_").innerHTML = " ";
    

        document.querySelector("._c_ss").innerHTML = " ";
        document.querySelector(".c_o_ding ").innerHTML = " ";
        document.querySelector(".co_d_ing").innerHTML = " ";
        document.querySelector(".cod_i_ng").innerHTML = " ";
        document.querySelector(".codi_n_g").innerHTML = " ";
        document.querySelector(".codin_g_").innerHTML = " ";

        document.querySelector("._c_ss").innerHTML = " ";
        document.querySelector(".main-js_s_").innerHTML = " ";
        document.querySelector(".cs_s_").innerHTML = " ";

        document.querySelector(".ht_m_l").innerHTML = " ";
        document.querySelector(".m_a_in-jss ").innerHTML = " ";
        document.querySelector(".ma_i_n-jss").innerHTML = " ";
        document.querySelector(".mai_n_-jss").innerHTML = " ";
        document.querySelector(".main_-_jss").innerHTML = " ";
        document.querySelector(".main-_j_ss").innerHTML = " ";
        document.querySelector(".main-j_s_s").innerHTML = " ";
        document.querySelector(".main-js_s_").innerHTML = " ";

        document.querySelector(".mai_n_-jss").innerHTML = " ";
        document.querySelector(".n_a_v").innerHTML = " ";
        document.querySelector(".na_v_").innerHTML = " ";

        document.querySelector(".main-_j_ss").innerHTML = " ";
        document.querySelector(".j_a_vascript").innerHTML = " ";
        document.querySelector(".ja_v_ascript").innerHTML = " ";
        document.querySelector(".jav_a_script").innerHTML = " ";
        document.querySelector(".java_s_cript").innerHTML = " ";
        document.querySelector(".javas_c_ript").innerHTML = " ";
        document.querySelector(".javasc_r_ipt").innerHTML = " ";
        document.querySelector(".javascr_i_pt").innerHTML = " ";
        document.querySelector(".javascri_p_t").innerHTML = " ";
        document.querySelector(".javascrip_t_").innerHTML = " ";

        document.querySelector(".javascr_i_pt").innerHTML = " ";
        document.querySelector(".i_n_dex").innerHTML = " ";
        document.querySelector(".in_d_ex").innerHTML = " ";
        document.querySelector(".ind_e_x").innerHTML = " ";
        document.querySelector(".inde_x_").innerHTML = " ";
  
        document.querySelector(".cs_s_").innerHTML = " ";
        document.querySelector(".s_t_yle").innerHTML = " ";
        document.querySelector(".st_y_le").innerHTML = " ";
        document.querySelector(".sty_l_e").innerHTML = " ";
        document.querySelector(".styl_e_").innerHTML = " ";

        document.querySelector(".javascri_p_t").innerHTML = " ";       
        document.querySelector(".p_r_ogramming").innerHTML = " ";
        document.querySelector(".pr_o_gramming").innerHTML = " ";
        document.querySelector(".pro_g_ramming").innerHTML = " ";
        document.querySelector(".prog_r_amming").innerHTML = " ";
        document.querySelector(".progr_a_mming").innerHTML = " ";
        document.querySelector(".progra_m_ming").innerHTML = " ";
        document.querySelector(".program_m_ing").innerHTML = " ";
        document.querySelector(".programm_i_ng").innerHTML = " ";
        document.querySelector(".programmi_n_g").innerHTML = " ";
        document.querySelector(".programmin_g_").innerHTML = " ";}
    else if (p = 6) {
        bob.innerHTML= "";
        bob.innerHTML= "Haha";
    }

    }

/* This doesnt work because i used inputs inside divs
var container = document.getElementsByClassName("grid-container")[0];

container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}
*/


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
