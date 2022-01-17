function solution(jobs) {
  jobs = jobs.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let waiting = [];
  let time = 0;
  let i = 0;

  while (waiting.length > 0 || i < jobs.length) {
    // 대기열 push
    if (jobs.length > i && jobs[i][0] <= time) {
      waiting.push(jobs[i]);
      waiting.sort((a, b) => a[1] - b[1]);
      i += 1;
      console.log("waiting: ", waiting);
      continue;
    }

    // 대기열 pop
    if (waiting.length > 0) {
      console.log("shift:", waiting[0]);
      let [s, e] = waiting.shift();
      answer += time - s + e;
      time += e;
    } else {
      console.log("jobs[i]: ", jobs[i]);
      time = jobs[i][0];
    }
  }
  console.log("sum: ", answer);

  return parseInt(answer / jobs.length);
}

// ! [요청시점, 소요시간]
solution([
  [0, 3],
  [1, 9],
  [2, 6],
  [3, 10],
  [4, 7],
]);

/*
현재시간 + 시작 배열[1] >  값의 [0] 가진 값 따로 뺌
그것들의 [1] 기준 sort((a, b) => a[1] - b[1])
sort()된 배열 .shift()  
현재시간 + 그 배열의 [1]값  
*/
