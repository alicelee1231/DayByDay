function solution(s) {
    let re = [];
    for (let i = 0; i < s.length; i++) {
        let last = s.slice(0,i).lastIndexOf(s[i]);
        if (last !== -1) {
            re.push(i - last); 
        } else {
            re.push(-1); 
        }
    }
    console.log(re);
    return re;
}
