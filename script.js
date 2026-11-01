const body = document.querySelector("#mainBody");
console.log(body);
const btn =document.querySelector("#themeBtn");
btn.addEventListener("click",function(event){
    console.log("Dark Mod Activated");
    
    if(body.style.backgroundColor == "black"){
       body.style.backgroundColor = "white";
       body.style.color="black";
       btn.textContent ="Switch To Dark Mode";
    }else{
        body.style.backgroundColor="black";
        body.style.color="white";
        btn.textContent="Switch To Light Mode";
    }
   
})
// input
let input = document.querySelector("#inputText")
let output =document.querySelector("#outputText");

input.addEventListener("input",(event)=>{
input.value;
output.textContent=input.value;
})
// change
let dropDown = document.querySelector("#dropDown");
let selectOption = document.querySelector("#selectOption");
dropDown.addEventListener("change",(event)=>{
dropDown.value;
selectOption.textContent=dropDown.value;
})
// submit
let form = document.querySelector("#myForm");
let name = document.querySelector("#userName");
let email =document.querySelector("#userEmail");
let submitText = document.querySelector("#submitText")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    submitText.textContent="Welcome! " + name.value + " Your e-mail is " + email.value;
})

