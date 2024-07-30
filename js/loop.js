// let heading="content from js <h1> loop statment of JS</h1>";
// document.body.innerHTML=heading;
// if statment
function getnumber(){
    let number = document.getElementById("age").value;
    // let number2=number1.value;
    // let number=parseFloat(number2);
    if (number>18)
        {
            document.body.innerHTML="you can vote";
            // console.log("you can vote")
        }
         else
         {
            document.body.innerHTML="you can't vote";
            // console.log("you can't vote")
    
        }
}