import java.util.*;
class Solution {
    public int solution(int order) {
        int answer = 0;
        String[] a = Integer.toString(order).split("");
        for(int i=0; i < a.length; i++){
            if(a[i].equals("3")){
                answer++;
            }else if(a[i].equals("6")){
                answer++;
            }else if(a[i].equals("9")){
                answer++;
            }
        }
        
        return answer;
    }
}