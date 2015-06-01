var arr = [7,3,7,9,2,3,6,3,5,93,54,2,62,64,3,452,4,62,7,5];


function bubbleAsc (arr) {
    var resArr = arr.slice(0);
    var swaps;
    do {
        swaps = 0;
        for (i=0,k=1;k<arr.length;i++,k++) {
            if (resArr[k] < resArr[i]) {
                 swaps++;
                 var temp = resArr[k];
                 resArr[k] = resArr[i];
                 resArr[i] = temp;
            }
           
        }
    } while (swaps > 0)
    return resArr;
}