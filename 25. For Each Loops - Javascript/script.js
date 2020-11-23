var Fruits = ["Banana", "Mango", "Orange", "Apple"];    //this is just an array

var i;
for(i=0; i<Fruits.length; i++)                          // we can use for loop to print elements from an array
{
    document.write(Fruits[i]);
    document.write("</br>");
}


Fruits.forEach(function(){
    document.write("element");
    document.write("</br>");
})
// in javascript there is a dedicated way to print elements from an array, FOR EACH LOOP
// we just printed out ELEMENT word to see how many times it gets printed out
// element word printed out 4 times, which meant there are 4 elements


Fruits.forEach(function(j){
    document.write(j);
    document.write("</br>");
})
//here we actually printed all the elements inside an array by calling the elements from array
//instead of calling by J, we can write anything inside the bracket