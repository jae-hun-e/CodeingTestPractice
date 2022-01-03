// 완주하지 못한 사람 1명
function solution(participant, completion) {
  // sort
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
