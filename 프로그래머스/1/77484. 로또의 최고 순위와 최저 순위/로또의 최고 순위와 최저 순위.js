function solution(lottos, win) {
    var answer = [];
//     똑같은수
    let cnt = 0
    for(let i = 0; i < lottos.length; i++){
        if(win.indexOf(lottos[i]) != -1){
            cnt++
        }
    }
// 0의 개수
    let zro = lottos.filter(el => 0 === el).length
    answer.push(cnt + zro, cnt)
    let result = []
    for(let i = 0; i < answer.length; i++){
        if(answer[i] === 6){
            result.push(1)
        }else if(answer[i] === 5){
            result.push(2)
        }else if(answer[i] === 4){
            result.push(3)
        }else if(answer[i] === 3){
            result.push(4)
        }else if(answer[i] === 2){
            result.push(5)
        }else{
            result.push(6)
        }
    }
    
    return result;
}