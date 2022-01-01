//Take 3 inputs from the user and show minimum of the three. 
var a= prompt("Enter the Number 1");
var b= prompt("Enter the Number 2");
var c= prompt("Enter the Number 3");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
if((a<b) &&(a<c))
{
    alert("The minimum no is ="+ a);
}
else if((b<a)&&(b<c))
{
    alert("The minimum no is ="+ b);
}
else
{
    alert("The minimum no is ="+ c);
}

