var arr = [200, 100, 300];

// pass
arr.splice(2, 0, 10000);

console.log(arr);



// 출력값 [200, 100, 10000, 300]

/* 
splice(인덱스, 제거할 요소 갯수, 추가할 값)
*/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice