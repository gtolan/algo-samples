//Iterates through values, takes the minimum 
//from the remaining values and finds the minimum
//replacing the current value with the remaining min
//and removing the min that has been moved
//O(n^2))

const swap = (arr,curr,next) => {
    let temp = arr[curr];
    arr[curr] = arr[next];
    arr[next] = temp;
}

const selectionSort = nums => {

    for(let i = 0;i < nums.length;i++){
        let current = nums[i];
        let remaining = nums.slice(i, nums.length);
        let minVal = Math.min(...remaining);
        let remainingMinValueIndex = remaining.findIndex(el => el === minVal);

        if (current > minVal) {
          swap(nums, i, remainingMinValueIndex + i);
        }  
    }

}

const arr = [1,33,2,34,12,4,6,7];
selectionSort(arr);