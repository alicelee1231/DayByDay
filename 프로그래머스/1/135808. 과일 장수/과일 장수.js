function solution(k, m, score) {
    score.sort(function(a,b) {
               return b - a
               })
    let result = 0
    let a = []
    for(let i = 0; i < score.length; i++){
        a.push(score[i])
        if(a.length === m){
            let c  = Math.min(...a)
            result += c * m
            a = []
        }
    }
    return result;
}