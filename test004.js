function typeCheck(input) {
  return typeof input
}

console.log(
  typeCheck(1),
  typeCheck(2.22),
  typeCheck('p'),
  typeCheck([1,2,3])
)