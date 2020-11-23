function handleclick(element)
{
    element.innerHTML = "Clicked"
    element.style = "background-color: skyblue"
}

var image = document.getElementById("image");

image.addEventListener("mouseover", function(){
    this.style = "box-shadow: 5px 5px 5px grey";
    this.width = "300";
})

image.addEventListener("mouseout", function(){
    this.style = "";
    this.width = "200";
})