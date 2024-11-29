function solution(numbers) {
    var answer = [];
    
    let a = new Set()
    for(let i = 0 ; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            a.add(numbers[i] + numbers[j])
        }
    }
    a.forEach((e) =>  answer.push(e))
    answer.sort(function(a,b) {
        return a - b
    })
    return answer;
}