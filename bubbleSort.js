//O(n^2)) worst

const bubble = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      //45
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  console.log(nums);
};

let arr = [1, 45, 2, 34, 3, 6, 9];
bubble(arr);
