//Program to mul4 and add9 in an array by higher order function

function manuplatearray(arr, manuplate){
    var res=[];
    for(let i=0;i<arr.length;i++){
        var a=manuplate(arr[i]);
        res.push(a);
        
    }
    return res;
}
function mul4(arr)
{
    return arr*4;

}
function add9(arr){
    return arr+9;
}
var out=manuplatearray([2,7,8,4],mul4);
var out2=manuplatearray([2,7,8,4],add9)
console.log("Output of multiply Function");
console.log(out);
console.log("Output of Add Function");
console.log(out2);