var nums = [100, 200, 300, 400, 500];
var newArr = [];
nums.filter((v, i) => {
  if(v !== 300 && v !== 400) {
    newArr.push(v)
  }
})
console.log(newArr)


/* 
1. filter 사용하여 새로운 배열에 push
2. splice 사용하려면? 
  - 특정 인덱스에서 값 찾고 
*/

function findNumAndPop(arr, number) {
  return arr.splice(arr.indexOf(number),1)
}

console.log(
  findNumAndPop(nums, 300),
  findNumAndPop(nums, 400),
  nums
)