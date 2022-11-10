var a = 10;
var b = 2;

for (var i = 1 ; i < 5 ; i += 2) {
  a += i;
}

console.log(a + b)

/* 
i 1 -> 3
a 10 + 1

i 3 -> 5
a 11 + 3

i 5 -> 종료


최종 14 + 2 16
*/

