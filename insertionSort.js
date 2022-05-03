//stash ordered list to left of current index
//J decreases to find the value which is the last
//number that is bigger than the current value
//once this number is found = J replaces the current value
//O(n^2))

const insertionSort = (arr) => {

    for(let i = 1;i < arr.length;i++){
        let current = arr[i];
        let j;
        //is current greater than last ele
        for(j = i-1;j >= 0 && arr[j] > current;j--){     
            arr[j + 1] = arr[j];
            //swapping back into place before the current item.   
            //replace the values that are behind which are
            //less than the value ahead
            //when no more can be swapped - fill the current value stored
            //using the last J index where the inner loop stopped
        }
        arr[j + 1] = current;
        //slot current value into the index where J stopped - that has been found to be greater than its value

    }
    console.log('final',arr );
    return arr;
}

const list = [2,5,1,5,6,7,4,7,9,10,3,11];

insertionSort(list)