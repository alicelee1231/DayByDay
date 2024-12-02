function solution(n, arr1, arr2) {
    var answer = [];
    let c = 0
    let b = []
    for(let i = 0; i < n; i++){
       let a = (arr1[i] |  arr2[i]).toString(2)
        b.push(a)
    }
    for(let i = 0; i < b.length; i++){
        while(b[i].length < n ){
            b[i] = "0" + b[i]
        }
    }
    for(let i = 0; i < b.length; i++){
        let shp = ""
        for(let j = 0; j < b[i].length; j++){
            if(b[i][j] === "1"){
                shp += "#"
            }else if(b[i][j] !== "1") {
                shp += " "
            }
        }
        answer.push(shp)
    }
    return answer;
}