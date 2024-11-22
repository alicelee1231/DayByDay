function solution(arr) {
    var answer = [];
    
    let mini = Math.min(...arr)
    let idx = arr.indexOf(mini)
    if(arr.length === 1){
        return [-1]
    }else{
        arr.splice(idx,1)
        return arr
    }
}