// We can also write FUNCTIONS inside the OBJECT
var person = 
{
    name: "Amir",
    age: 27,                        
    isMale: true,
    occupation: "student",
    printFullname: function()                   //this is just a basic object to print out
    {
        document.write("<h1>Amir Hamza</h1>");
    },
    printName: function()                       //this is an object to print out name value inside object
    {
        document.write(this.name);              // 'this' tag helps here to grab the name key-value inside
    },
    printoccupation: function()
    {
        document.write(this.occupation);
    }
}
person.printFullname();
person.printName();
person.printoccupation();