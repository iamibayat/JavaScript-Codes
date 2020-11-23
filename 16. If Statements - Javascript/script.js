/*
var isMale = true;				    //prints out, u r male
//var isMale = false;				//prints out u r not male

 if(isMale)
 {
     document.write("Yes, you are Male.");
 }
 else
 {
     document.write("No, you are not Male.");
 }
*/

/*
var isMale = true;
var isTall = false;				    				

 if(isMale && isTall)
 {
     document.write("Yes, you are a tall Male.");         //requires both the condition to be true
 }
 else
 {
     document.write("No, you are either not Male or not tall or both.");    //occurs when one of the condition is false or both
 }
 */

 /*
var isMale = false;
var isTall = false;				    				

 if(isMale || isTall)
 {
     document.write("Yes, you are either male or tall or both.");   //requires one of the condition to be true
 }
 else
 {
     document.write("No, you are not Male and not tall.");          //occurs when both the condition is false
 }
 */

var isMale = false;
var isTall = false;				    				

 if(isMale && isTall)
 {
     document.write("Yes, you are a tall Male.");           //occurs when both the condition is true
 }
 else if(isMale && !isTall)
 {
     document.write("You are a short Male.")                //occurs when isMale is true and isTall is false
 }
 else if(!isMale && isTall)
 {
     document.write("You are not Male but you are tall.")   //occurs when isMale is false and isTall is true
 }
 else
 {
     document.write("No, you are not Male and not tall.");  //occurs when both the condition are false
 }