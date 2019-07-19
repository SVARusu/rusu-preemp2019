var arr = [];

document.getElementById("firstName").addEventListener("blur", function(event) {
    var value = document.getElementById("firstName").value;
    if (value == "") {
        document.getElementById("firstName").setAttribute("style", "border: 2px solid red;");
        document.querySelector("#remove-me").innerHTML = " ";
        
    } 
});
document.getElementById("lastName").addEventListener("blur", function(event) {
    var value = document.getElementById("lastName").value;
    if (value == "") {
        document.getElementById("lastName").setAttribute("style", "border: 2px solid red;");
        document.querySelector("#remove-me").innerHTML = " ";
        
    } 
});

document.getElementById("email").addEventListener("blur", function(event) {
    var value = document.getElementById("lastName").value;
    if (value == "") {
        document.getElementById("email").setAttribute("style", "border: 2px solid red;");
        document.querySelector("#remove-me").innerHTML = " ";
        
    } 
});

document.querySelector("#firstName").addEventListener("input", function(e){
    document.getElementById("firstName").removeAttribute("style", "border: 2px solid red;");
    var p = document.querySelector("#remove-me");
    p.innerHTML = " ";
    var value = e.target.value;
    var letters = /^[A-Za-z][A-Za-z\s]*$/;
    if(!value.match(letters)){

        document.getElementById("firstName").setAttribute("style", "border: 2px solid red;");
        var node = document.createTextNode("Use letters or else");
        p.appendChild(node);
    }
});

document.querySelector("#lastName").addEventListener("input", function(e){
    document.getElementById("lastName").removeAttribute("style", "border: 2px solid red;");
    var p = document.querySelector("#remove-me");
    p.innerHTML = " ";
    var value = e.target.value;
    var letters = /^[A-Za-z][A-Za-z\s]*$/;
    if(!value.match(letters)){

        document.getElementById("lastName").setAttribute("style", "border: 2px solid red;");
        var node = document.createTextNode("Use letters or else");
        p.appendChild(node);
    }
});

document.querySelector("#email").addEventListener("input", function(e){
    document.getElementById("email").removeAttribute("style", "border: 2px solid red;");
    var p = document.querySelector("#remove-me");
    p.innerHTML = " ";
    var value = e.target.value;
    var letters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!value.match(letters)){

        document.getElementById("email").setAttribute("style", "border: 2px solid red;");
        var node = document.createTextNode("That's not a valid email");
        p.appendChild(node);
    }
});

var okButton = document.getElementById('checkout');
var emailField = document.getElementById('email');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
console.log(emailField.length);
if(emailField.length > 0){
    okButton.disabled = false;
}

console.log(arr);

document.querySelector("form").addEventListener("keypress", function(){
    console.log(emailField.value.length);
    if(emailField.value.length > 0 && firstName.value.length > 0 && lastName.value.length > 0){
        okButton.disabled = false;
    }else {
        okButton.disabled = true;
    }
});


var elements = document.getElementsByClassName("remove-item");
for(var i = 0; i <= elements.length; i++){
    elements[i].addEventListener("click", deleteFunction, false)
}

function deleteFunction(e){
    e.target.parentElement.parentElement.style.display = "none";

};