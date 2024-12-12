function solution(nums) {
   let answer = 0
    let a = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let x = j + 1; x < nums.length; x++){
                    a.push(nums[i] + nums[j] +  nums[x])
            }
        }
    }
    let mx =  Math.max(...a)
    let prime = new Array(mx + 1).fill(true)
    prime[0] =  false
    prime[1] = false
    for(let i = 2; i * i <= mx; i++){
                if(prime[i]){
                    for(let j = i * i; j <= mx; j+=i){
                        prime[j] = false
                    }
                }
    }

    answer =  a.filter(sum => prime[sum]).length
    return answer 
   }