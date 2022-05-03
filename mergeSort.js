//Generally better than quicksort
//merge sort is always evenly split, 
//where quicksort depends on pivot for partition
//O(log^2(n))

const merge = (left, right) => {
    let sortedArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift());
        };
    }
    let result = [...sortedArr, ...left, ...right];
    
    return result;
}

const mergeSort = (arr) => {

    if (arr.length < 2) return arr;
   
    let midIndex = Math.floor(arr.length / 2);
    let arr1 = arr.splice(0,midIndex); 
       
    return merge(mergeSort(arr1),mergeSort(arr))
}

let arr = [1, 4, 11, 2, 5, 2, 6, 9, 10];
mergeSort(arr);