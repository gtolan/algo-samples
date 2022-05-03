//Pivot and partition
//bigger values to one side of the pivot smaller to the other
//recursive breaking list smaller 
//O(log^2(n))

const quickSortRecursive = (originalList)=> {
    let list = [...originalList];
    //return if list is a single value
    if(list.length < 2) return list;
    //create a pivot point where to place smaller 
    //and bigger values on either side
    //then spread the smaller, pivot and bigger into
    //a sorted array
    const pivot = list[Math.floor((list.length)/2)]; //chedck performance v list[0]
    let smaller = list.filter(value => value < pivot);
    let bigger = list.filter(value => value > pivot);

    let sorted = [
      ...quickSortRecursive(smaller),
      pivot,
      ...quickSortRecursive(bigger),
    ];

    return sorted;
}


const arr = [1,4,53,45,2,4,9,14,23];
quickSortRecursive(arr)