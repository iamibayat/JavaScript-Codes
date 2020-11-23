/*
function greet()
{
    document.write("Hi, there..");
}
greet();
// This is a very simple function.
*/

/*
function greet()
{
    alert("Hello!!")
    var name = "John";
    document.write("Hi there.." + name);
    document.write("<h2>Hi there.." + name + "</h2>");
}
greet();
//Here we used alert function, variable and html tags to display and call
*/

/*
function greet(name)
{
    alert("Hello!!");
    //var name = "John";
    document.write("Hi there.." + name);
    document.write("<h2>Hi there.." + name + "</h2>");
}
greet("Amir");
greet("Hamza");
// Here we used parameter for the name to call the function
*/

/*
function greet(name, age)
{
    alert("Hello!!")
    document.write("Hi there.." + name);
    document.write(" Your age is " + age);
}
greet("Amir", 27);
// Here we used multiple parameter while calling the function
*/

function add(num1, num2)
{
    return num1 + num2;
}
document.write(add(2.5, 12.5));
// Here we used multiple parameter for addition and return the answer 