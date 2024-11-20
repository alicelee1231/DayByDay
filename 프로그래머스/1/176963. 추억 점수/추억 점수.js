function solution(name, yearning, photo) {
    var answer = [];
    const a = new Map()
    for(let i = 0; i < name.length; i++){
        a.set(name[i], yearning[i])
    }

    for(let i =0; i < photo.length; i++){
        let sum = 0
        for(let j = 0; j < photo[i].length; j++){
            if(a.has(photo[i][j])){
               sum += a.get(photo[i][j])
            }
        }
        answer.push(sum)
    }
    return answer;
}