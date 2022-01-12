function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    if (
      commands[i][0] > commands[i][1] ||
      commands[i][1] - commands[i][0] + 1 < commands[i][2]
    )
      continue;
    console.log(commands[i][0], commands[i][1], commands[i][2]);
    const newArr = array.slice(commands[i][0] - 1, commands[i][1]);
    console.log(
      "newArr",
      i,
      newArr.sort((a, b) => b - a)
    );
    console.log("newArr", i, newArr.sort((a, b) => a - b)[-commands[i][2] + 1]);
    answer = [...answer, newArr.sort((a, b) => a - b)[commands[i][2] - 1]];
  }
  return console.log(answer);
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
