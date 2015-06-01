function bubbleRec(arr,i,swapped) {
    if (i===0) {
        //very first invocation
        if (!trips) {
            console.log("first invocation");
            var trips = 0;
        } 

        //exit conditions
        if (!swapped && trips)  {
            console.log("exit conditions met!");
            return arr;
        }

        //starting over at new iteration
        if (trips) {
            console.log("starting over at new iteration");
        }

        //no matter what, reset swapped
        var swapped = false;
    }

    //do the swapping
    k = i + 1;
    if (arr[k] > arr[i]) {
        console.log("swapped indexs: "+i +" "+k);
        var temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
        //swap
        swapped = true;
    } else {console.log("no swap");}

    //check for end of array, reset or increment
    if (k === arr.length -1) {
        trips++;
        i = 0;   
    } else {
        i++;
    }

   //recurse!
    res = bubbleRec(arr, i, swapped);
    return res;
}