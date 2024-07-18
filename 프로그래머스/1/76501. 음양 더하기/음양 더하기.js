function solution(absolutes, signs) {
    var answer = 123456789;
    let result = 0;
    for(i = 0; i < signs.length; i++){
        if(signs[i] == false){
            result -= absolutes[i]
        }else{
            result += absolutes[i]
        }
    }
    return result;
}