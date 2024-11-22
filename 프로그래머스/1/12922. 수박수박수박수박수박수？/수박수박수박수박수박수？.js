function solution(n) {
    var answer = '';
//     for(let i = 0; i < n; i++){
//         if(i % 2 === 0){
//             answer += '수'
//         }else  {
//             answer += '박'
//         }
//     }
    let a = '수박'
    let b = Math.floor(n / 2)
    let c = a.repeat(b)
    if(n % 2 != 0) {
        c += '수'
    }
    return c;
}


