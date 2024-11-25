function solution(t, p) {
    var answer = 0;

    let a = []
    for(let i = 0; i < t.length; i++){
        if(t.slice(i, i + p.length).length === p.length){
            a.push(t.slice(i, i + p.length))
            continue
            
        }
    }
    a.sort()
    for(let i = 0; i < a.length; i++){
        if(a[i] > p){
            break
        }else{
            answer++
        }
    }
    
    return answer;
}