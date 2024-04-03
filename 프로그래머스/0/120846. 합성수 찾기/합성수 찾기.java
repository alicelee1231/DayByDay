class Solution {
    public int solution(int n) {
        int answer = 0;
        for(int i = 0; i <= n; i++){
            int count = 0;
            for(int k = 1; k <= i; k++){
                count += i % k == 0 ? 1:0;
            }
            answer += count >= 3 ? 1 : 0;
        }
        return answer;
       
    }
}