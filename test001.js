var nums = [100, 200, 300, 400, 500];
var newArr = [];
nums.filter((v, i) => {
  if(v !== 300 && v !== 400) {
    newArr.push(v)
  }
})
console.log(newArr)