//non recursive, can only return boolean
var binarySearch = function(arr, val) {
    var loop = 0;
    var wall;
    
    while (arr.length > 1) {
          key = parseInt(arr.length / 2);
        console.log("=====\nloop:" + loop + "\nwall:" + wall + "\nmediankey:" + key + "\nmedianval:" + arr[key]);
        if (arr[key] > val) {
            //splice: start, deletecount
           arr=arr.splice(0,key);
        } else {
            //wall = Math.round((key + arr.length - 1) / 2);
           arr=arr.splice(key, arr.length);
        }
        console.log(arr.join());
        //loop++;
    }
};


//recursive, can return index
var findBinary = function(arr,searchVal) {
   return binaryRecurse(0,arr.length,arr,searchVal);
};

var binaryRecurse = function(start,end,arr,searchVal) {
    console.log("starting new binaryRecurse.");
    medianKey = Math.floor((start + end) / 2);

    console.log("start:" +start);
    console.log("end:" +end);
    console.log("medianKey:" +medianKey);

    //val is here
    if (searchVal === arr[medianKey]) {
        console.log("found it!");
        return medianKey;
    }

    //take the latter half of arr
    else if (searchVal > arr[medianKey]) {return binaryRecurse(medianKey,end,arr,searchVal);}

    //take the first half of arr
    else if (searchVal < arr[medianKey]) {return binaryRecurse(start,medianKey,arr,searchVal);}

    else {console.log("error, inputs not expected");}
    
};

arr = [13, 21, 33, 37, 80, 99, 100, 109];

//take a numeric asc sorted array and val we search for
//read in the median value
//compare it to search target
//if val is greater than median, discard first half of array
//otherwise discard 2nd half of array

//keys  -> 5 
//adding it to the end key and dividing it by two
//[0,1,2,3,4,5,6,7,8,9]



//searching for 99, first median is 37, toss first half arr(0 to m)
//[13, 21, 33, 37, 80, 99, 100, 109]

//2nd pass, searching for 99, median is 100, toss second half arr(m to end)
//[80, 99, 100, 109]]

//3rd pass
//2 values left!
//searching for 99, median is 100, try one value, save or ditch
//[80, 99]
//3 / 2 = 2