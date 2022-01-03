function solution(clothes) {
  let sum = 1;

  const obj = {};

  for (let key of clothes) {
    obj[key[1]] = (obj[key[1]] || 0) + 1;
  }
  for (let key in obj) {
    sum *= obj[key] + 1;
  }

  return console.log(sum - 1);
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
solution([
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
]);
