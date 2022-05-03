const swap = (arr,first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

//in place swap