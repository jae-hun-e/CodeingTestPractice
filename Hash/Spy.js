function solution(clothes) {
  const map = clothes.map((item) => item[1]);
  const sort = map.sort();
  // console.log(sort)
  let tmp = 0;
  const clothes_type = [];

  for (let i = 1; i < sort.length + 1; i++) {
    if (i !== sort.length && sort[i - 1] !== sort[i]) {
      clothes_type.push(i - tmp);
      tmp = i;

      console.log(1, tmp);
    } else if (i === sort.length) {
      clothes_type.push(i - tmp);

      console.log(2, tmp);
    }
  }
  // console.log(clothes_type);
  tmp = 1;
  for (const item of clothes_type) {
    tmp *= item + 1;
  }
  return tmp - 1;
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
