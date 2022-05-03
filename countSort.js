const valuesPerms = (num, iterations) => {
  let arr = [];
  for (let i = 0; i < iterations; i++) {
    arr.push(num);
  }
  return arr;
};

const countSort = (nums) => {

    let result = [];
    let obj = {};
    //fill hashmap with val and qty
    for(let i = 0;i < nums.length;i++){
        obj[nums[i]] ? obj[nums[i]]++ :( obj[nums[i]] = 1)
    }
    //order arr by lowest key with val permutations
    let values = Object.keys(obj);
    for (let j = 0; j < values.length; j++) {
        result.push(...valuesPerms(values[j],obj[values[j]]));
    }
    //chnage from str to number
    return result.map(num => Number(num));
}
let integers = [2,1,3,5,2,5,3,4,5,6,11,0,2]


