var i,j;
var numberGrid = 
[
    //[0,1,2], [3,4,5], [6,7,8], [9]        //this is an array inside another array and can be drawn as below one
    [0,1,2],                                //this basically can be maped as 2D shaped and called 2D array
    [3,4,5], 
    [6,7,8],                                //Can be denote by ROWS and COLUMNS
    [9]
]
document.write(numberGrid[0][0]);
document.write(numberGrid[1][0]);
document.write("<br>")
document.write("<br>")


for(i=0; i < numberGrid.length; i++)                    //here i gives number of rows
{
    for(j=0; j < numberGrid[i].length; j++)             //here j gives number of columns
    {
        document.write(numberGrid[i][j]);
    }
    document.write("<br>");
}