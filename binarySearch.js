//Recursive
//O(log^2(n)))
const findNumber = (arr, num) => {
   const target = num;
   if(arr.length == 1) return arr;
    const medianPivot = Math.floor(arr.length/2);
    console.log(medianPivot,target,'M>T')
    if (target < arr[medianPivot]) {
        return findNumber(arr.slice(0, medianPivot), target);
    } else if (target === arr[medianPivot]) {
        console.log("found", arr[medianPivot]);
    } else {
        return findNumber(arr.slice(medianPivot), target);
    }
}


const arr = [1,4,15,34,62,84,99,101];
findNumber(arr, 15)