var variables = ["data", "12", "2.35", "true", "false"]

document.write(variables);
document.write("</br>");

document.write(variables[2]);           //This gives the array index value
document.write("</br>");

document.write(variables.length);
document.write("</br>");

variables[0] = "data_type";             // we can also modify the index value
document.write(variables);
document.write("</br>");
