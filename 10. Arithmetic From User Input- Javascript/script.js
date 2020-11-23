var prompt1 = window.prompt("Enter a number.");
var prompt2 = window.prompt("Enter another number.");

//document.write(prompt1 + prompt2)         // by writing this will concatinate only, not addition
prompt1 = parseFloat(prompt1)
prompt2 = parseFloat(prompt2)
document.write(prompt1 + prompt2)