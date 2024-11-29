function solution(food) {   
     let result = ""
    let resu = ""
    for(let i = 1; i < food.length; i++){
        let cnt = Math.floor(food[i] / 2)
        result += i.toString().repeat(cnt)
        
    }
        resu = result.split("").reverse().join("")
    return result + "0" +  resu
}