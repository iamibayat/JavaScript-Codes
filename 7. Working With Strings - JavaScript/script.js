var message = "Hello There..";

document.write(message);

document.write(message.length);             //.length gives length of a string
document.write(message.toUpperCase());      // makes all uppercase letter
document.write(message.toLowerCase());      // makes all lowercase letter
document.write(message.charAt(1));          // this returns character at index number
document.write(message.indexOf("T"));       // this returns the index number of that character
document.write(message.indexOf("Z"));       // if the character is not found it returns -1
document.write(message.substring(6, 11));   
// this gives the substring of a string, first is the starting point and second is the index number-1 character.
document.write(message.substring( message.indexOf('T'), message.length ));
// this is how we can find a particular subtring in a given text or string.
document.write(message.endsWith("."));      //this gives a boolean value whether . ends with or not
document.write(message.endsWith(","));

var message2 = "How are you.";
document.write(message + message2);         //concatination of strings
document.write(message + " " + message2);