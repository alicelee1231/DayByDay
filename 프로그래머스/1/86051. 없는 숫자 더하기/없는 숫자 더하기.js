function solution(numbers) {
    // let x = 0
    // let y = 0
    // numbers.sort()
    // for(let i = 0; i < numbers.length; i++){
    //     x += numbers[i]
    // }
    // for(let i = 0; i <= 9 ; i++){
    //     y += i
    // }
    // return y - x
    let x = 0
    for(let i = 0; i <= 9; i++){
        if(!numbers.includes(i)){
            x += i
        }
    }
    
    return x
}