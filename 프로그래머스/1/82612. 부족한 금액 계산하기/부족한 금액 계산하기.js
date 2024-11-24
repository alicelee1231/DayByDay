function solution(price, money, count) {
    let tt = 0
    let i = 1

    while( i <= count){
       tt += price * i
        i++
    }
    // return Math.max(tt - money, 0);
    return tt - money > 0 ? tt- money : 0
}