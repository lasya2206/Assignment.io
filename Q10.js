//Take n from the user and print first n prime numbers.
var num= prompt("Enter the Number ");
num=parseInt(num);
var i=3,count,j;
if(num>=1)
{
console.log(2);
}
for(count=2;count<=num;i++)
{
    for(j=2;j<=i;j=j+1)
    {
       if(i%j==0)
        {
            break;    
        }
    }
    
    if(j==i)
    {
    console.log(i);
    count++;
    }
}