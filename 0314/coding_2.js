/*
    정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, 
    solution을 완성해주세요
*/

function solution(n) {
    var answer = 0;
    var a = 0;
    for (let i = 0; i < n; i++) {
        a++
        if (n % a == 0) {
            answer=answer+a;
        }
    }
    return answer;
}
const ret = solution(12);
console.log(ret)