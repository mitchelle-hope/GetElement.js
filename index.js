var changecolour=document.getElementById("Mybody")
changecolour.style.background="silver"

var titlekiosk=document.getElementById("title")
titlekiosk.style.color="green"

var juicyfruits=document.getElementById("nicefruits")
juicyfruits.style.textTransform="uppercase"

var myvegies=document.getElementById("vegies")
myvegies.style.textTransform="uppercase"

var myextremefruits=document.createElement("li")
var likedfruits=document.createTextNode("Strawberries, Apple, Guavas")
myextremefruits.appendChild(likedfruits)
var element=document.getElementById("fruList")
element.append(myextremefruits)

var vegetables=document.createElement("li")
var favvegies=document.createTextNode("Radish , GreenBeans, Pumkin")
vegetables.appendChild(favvegies)
var add=document.getElementById("vegList")
add.append(vegetables)

