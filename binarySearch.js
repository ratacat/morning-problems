var binarySearch = function(arr,val) {
      var loop = 0;
      key = arr.length / 2     
      while (loop < 15) {
            if (arr[loop] > val) {
                  arr = arr.splice(0,loop);
            }
            console.log("loop:"+loop+" key:"+key + " val:"+arr[key]);
            console.log(arr.join(''));
            key = parseInt(key / 2);
            loop++;
      }
}

//take a numeric asc sorted array and val we search for
//read in the median value
//compare it to search target
//if val is greater than median, discard first half of array
//otherwise discard 2nd half of array




//searching for 99, first median is 37, toss first half arr
//[13, 21, 33, 37, 80, 99, 100, 109]

//2nd pass
//[80, 99, 100, 109]]

//3rd pass
//searching for 99, median is 100, 
3 / 2 = 2