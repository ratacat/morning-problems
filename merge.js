arr1=[0,1,2,5,7,8,9,10,50];
arr2=[1,2,70,80,85,91];

var a = 0;
var b = 0;
var arrNew = [];

while(typeof arr1[a] !== 'undefined' && typeof arr2[b] !== 'undefined') {
    if (arr1[a] < arr2[b]) {
        arrNew.push(arr1[a]);
        a++;
        console.log("["+arr1[a]+"] "+arr2[b] );
    } else {
        arrNew.push(arr2[b]);
        b++;
        console.log(arr1[a]+" ["+arr2[b]+"]" );
    }
}
//console.log("newArr:"+arrNew.join());

if (typeof arr1[a] !== 'undefined') {
    var end = arr1.slice(a);
    var result = arrNew.concat(end);
} else {
    var end = arr2.slice(b);
    var result = arrNew.concat(end);
}

console.log(""+result);
