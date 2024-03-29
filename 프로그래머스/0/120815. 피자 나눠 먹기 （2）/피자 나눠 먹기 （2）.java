class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if (n % 6 == 0) {
            answer = n / 6;
        } else {
            int i = 1;
            while (true) {
                if (6 * i % n == 0) {
                    answer = i;
                    break;
                }
                i++;
            }
        }
        
        return answer;
    }
}
