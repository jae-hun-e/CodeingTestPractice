function solution(numbers) {
  let answer = "";
  let strNum = [];
  numbers = numbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    strNum.push({ key: i, value: string(numbers[i]).split("") });
  }
  // console.log(strNum);
  for (let i = 0; i < numbers.length; i++) {
    strNum[1];
  }
  return console.log(answer);
}

// solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);

/*
function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return answer[0] === '0' ? '0' : answer;
}
*/

const test = [2, 22, 25, 21];

test.sort((after, before) => {
  console.log(
    after,
    before,
    `${after}`,
    `${before}`,
    `${before}${after}`,
    `${after}${before}`
  );
  return `${b}${a}` - `${a}${b}`;
});
console.log(test);
