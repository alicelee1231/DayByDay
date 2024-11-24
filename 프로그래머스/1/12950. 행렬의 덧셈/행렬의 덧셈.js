function solution(arr1, arr2) {
    var answer = [];
for (let i = 0; i < arr1.length; i++) {
    answer[i] = []; // i번째 배열 초기화
    for (let j = 0; j < arr1[i].length; j++) {
        // arr2[i][j]가 없을 경우 기본값 0을 사용
        let value1 = arr1[i][j];
        let value2 = arr2[i] && arr2[i][j] !== undefined ? arr2[i][j] : 0;
        answer[i][j] = value1 + value2;
    }
}
    return answer
}