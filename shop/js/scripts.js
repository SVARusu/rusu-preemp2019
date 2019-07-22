var arr = [];
var finalProdPrice = 0;

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
        /* var node = document.createTextNode("Use letters or else");
        p.appendChild(node); */
        p.innerHTML = "error";
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


var addButton = document.getElementsByClassName("add")
console.log(addButton);
for(var i = 0; i < addButton.length; i++){
    addButton[i].onclick=addValue;
}

function addValue(e){
    var quantity = e.target.parentElement.children[1].textContent;
    var price = e.target.parentElement.parentElement.children[2].textContent;
    var prodPrice = e.target.parentElement.parentElement.children[4].textContent;
    var totalPrice = document.querySelector("#total-price").textContent;


    console.log(quantity);
    totalPrice = parseInt(totalPrice);
    price = parseInt(price);
    quantity = parseInt(quantity);
    prodPrice = parseInt(prodPrice);

    prodPrice = prodPrice + price;
    quantity++;
    totalPrice = totalPrice + price;

    quantity = quantity.toString();
    prodPrice = prodPrice.toString();
    totalPrice = totalPrice.toString();

    e.target.parentElement.children[1].innerHTML = quantity;
    e.target.parentElement.parentElement.children[4].innerHTML = prodPrice;
    document.querySelector("#total-price").innerHTML = totalPrice;
}


var removeButton = document.getElementsByClassName("remove")
console.log(removeButton);
for(var i = 0; i < removeButton.length; i++){
    removeButton[i].onclick=removeValue;
}

function removeValue(e){
    var quantity = e.target.parentElement.children[1].textContent;
    var price = e.target.parentElement.parentElement.children[2].textContent;
    var prodPrice = e.target.parentElement.parentElement.children[4].textContent;
    var totalPrice = document.querySelector("#total-price").textContent;

    totalPrice = parseInt(totalPrice);
    prodPrice = parseInt(prodPrice);
    price = parseInt(price);
    quantity = parseInt(quantity);

    console.log(quantity);

    if(quantity === 1){
        alert("you can't go lower than 1")
    }else{
        quantity--;
        prodPrice = prodPrice - price;
        totalPrice = totalPrice - price;
        console.log(quantity);
        quantity = quantity.toString();
        e.target.parentElement.children[1].innerHTML = quantity;
        e.target.parentElement.parentElement.children[4].innerHTML = prodPrice;
        document.querySelector("#total-price").innerHTML = totalPrice;
    }
    
}



var elements = document.getElementsByClassName("remove-item");
console.log("asajfajfa",elements);
for(var i = 0; i < elements.length; i++){
    /* elements[i].addEventListener("click", deleteFunction, false) */
    elements[i].onclick=deleteFunction;
}

function deleteFunction(e){
    var totalPrice = document.querySelector("#total-price").textContent;
    var price = e.target.parentElement.parentElement.children[4].textContent;

    totalPrice = parseInt(totalPrice);
    price = parseInt(price);
    
    
    totalPrice = totalPrice - price;

    totalPrice = totalPrice.toString();
    e.target.parentElement.parentElement.style.display = "none";
    document.querySelector("#total-price").innerHTML = totalPrice;


};