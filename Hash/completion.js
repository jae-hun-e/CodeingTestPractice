function solution(participant, completion) {
  // sort
  participant.sort();
  completion.sort();

  // noCompletion
  // let noCompletion = '';
  let sameName = 0;
  let noCompletion = "";

  for (let i = 0; i <= participant.length; i++) {
    if (i === participant.length - 1) {
      // 마지막이 동명이인 미완주일때
      sameName += 1;
      noCompletion = participant[i];
      break;
    }

    if (participant[i] !== completion[i]) {
      // 미완주 찾기

      noCompletion = participant[i];

      if (participant[i] === participant[i - 1]) {
        // 미완주 동명이인 여부
        sameName += 1;
      }
      break;
    }
  }

  return console.log(noCompletion);
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
