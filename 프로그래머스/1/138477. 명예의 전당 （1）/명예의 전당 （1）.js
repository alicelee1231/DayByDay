function solution(k, score) {
    var answer = [];
    let a = []
    for(let i = 0; i < score.length; i++){
           if(i < k){
               answer.push(score[i])
               a.push(Math.min(...answer))
           }
    }
       answer.sort(function(a, b)  {return b - a;});
    for(let i = answer.length - 1; i < score.length - 1; i++){
        if(answer[answer.indexOf(Math.min(...answer))] < score[i + 1]){
            answer[answer.indexOf(Math.min(...answer))] = score[i + 1]
            a.push(Math.min(...answer))
        }else{
            a.push(Math.min(...answer))
        }
    }
                    console.log(a)

            return a;
    }
   
