import java.util.*;

class Solution {
    public String solution(int age) {
        String answer = "";
        String a = Integer.toString(age);
        char[] b = a.toCharArray();
        for(int i = 0; i < b.length; i++){
            answer += String.valueOf((char)(b[i] + 49));
        }
        return answer;
    }
}

