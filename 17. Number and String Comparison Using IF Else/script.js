function Comparison(num1, num2, num3)
{
    if(num1 >= num2 && num1 >= num3)
    {
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3)
    {
        return num2;
    }
    else
    {
        return num3;
    }
}
document.write(Comparison(10,22,33));       //we can compare number inside variables


if ("word" == "word")                       //we can also compare strings 
{
    document.write(true);
}
else
{
    document.write(false);
}