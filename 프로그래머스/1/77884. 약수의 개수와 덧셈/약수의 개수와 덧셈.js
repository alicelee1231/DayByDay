function solution(left, right) {
    let answer = 0;

    // left ~ right 사이의 값들 순회
    for (let i = left; i <= right; i++) {
        let divisorCount = su(i); // 약수 개수 구하기
        // 약수의 개수가 짝수면 더하고, 홀수면 뺌
        if (divisorCount % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    return answer;
}

// 약수의 개수를 구하는 함수
function su(x) {
    let count = 0;
    for (let i = 1; i <= x; i++) { // i = 1부터 시작
        if (x % i === 0) {
            count++;
        }
    }
    return count;
}
