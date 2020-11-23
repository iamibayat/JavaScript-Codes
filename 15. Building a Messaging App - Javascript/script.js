var messages = document.getElementById("messages")          //we created 3 variables for the 3 ids to work with
var textbox = document.getElementById("textbox")
var button = document.getElementById("button")

button.addEventListener("click", function(){
    var newMessage = document.createElement("li")           //we created an html element on the page and here the item is a list
    newMessage.innerHTML = textbox.value;                   //we just grabbed the textbox value an put it inside the list item
    messages.appendChild(newMessage);                       //now we just append the message inside the list
    textbox.value = "";                                     //whenever the message is send the box becomes empty
})
