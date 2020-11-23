// In Array, we can store diff kinds of values
// But in Objects, we can store diff name-value pairs or key-value pairs.

var person = 
{
    name: "Amir",                   // we can repeat values twice or more but we cant repaet keys or ids.
    age: 27,                        // means we can store same values for multiple keys but not viceversa.
    isMale: true,
    occupation: "student"  
}

document.write(person);
document.write(person.name);        //we can access the values by writing this
document.write(person.age);
document.write(person.isMale);
document.write(person.occupation);

person.name= "Hamza";               //we can also modify the value of key or attributes outside.
document.write(person.name);