/*Local storage can help the user to store data in our storage if we input the data.
It can save this data in our storage and we can also retrive the data to see it again or use it */

var textbox = document.getElementById("txt");
var button = document.getElementById("btn");

button.addEventListener("click", function(){
    //alert("heyyy..");
    localStorage.txtBoxValue = textbox.value;
})
document.write(localStorage.name);                  //by writing this formate we can store the value inside the storage