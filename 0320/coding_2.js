/*
    함수 solution은 정수 n을 매개변수로 입력받습니다. 
    n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
    예를들어 n이 118372면 873211을 리턴하면 됩니다.

    제한 조건
    n은 1이상 8000000000 이하인 자연수입니다
*/

function solution(n) {
    var c = String(n)
    var num = c.split('');
    num.sort(function (a, b) {
        return b - a;
    });
    return parseInt(num.join(''));
}

// function solution(n) {
//     const num = String(n).split('').map(Number);
//     num.sort(function (a, b) {
//         return b - a;
//     });
//     const answer = parseInt(num.join(''));
//     return answer;
// }

console.log(solution(118372));