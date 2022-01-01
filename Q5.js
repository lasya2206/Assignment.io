//Create an array using .push with prompt and also using parseInt(); -> Take three numbers and find max. (Using arrays) -> Math.max()
var a= prompt("Enter the Number 1");
var b= prompt("Enter the Number 2");
var c= prompt("Enter the Number 3");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
var h=[];
h.push(a);
h.push(b);
h.push(c);
//console.log("Maximum Number is = "+h);
//console.log(Math.max(h[0],h[1],h[2]));
console.log(Math.max(...h));
console.log(h);