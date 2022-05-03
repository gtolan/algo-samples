//O(n))

const findANumber = (num, list) => {
  let found = list.find((el) => el === num);
  console.log(found);
};

const findInForLoop = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log([true, i, arr[i]]);
      return;
    }
  }
};

const arr = [1, 4, 2, 5, 3, 6, 8, 9, 11, 2];
findANumber(6, arr);
findInForLoop(arr, 6);
