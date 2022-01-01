//Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.
var a= prompt("Enter the Number 1");
var b= prompt("Enter the Number 2");
var c= prompt("Enter the Number 3");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
if((a>b) &&(a>c))
{
    alert("The maximum no is ="+ a);
}
else if((b>a)&&(b>c))
{
    alert("The maximum no is ="+ b);
}
else
{
    alert("The maximum no is ="+ c);
}

