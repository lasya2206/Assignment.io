// Write a program to take an input from the user (num) and check whether it is a prime number or not.
var num= prompt("Enter the Number ");
num=parseInt(num);
var flag=0;
for(var i=2;i<=num/2;i=i+1)
{
if(num%i==0)
{
 flag=1;
 break;    
}
}
if(num==1)
{
    console.log("Not a prime no or not a composite no");
}
else if(flag==0)
{
    console.log("It is a prime no");
}
else
{
    console.log("Not a prime no");
}
