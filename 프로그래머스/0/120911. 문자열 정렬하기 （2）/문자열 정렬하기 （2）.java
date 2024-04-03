import java.util.*;
class Solution {
    public String solution(String my) {
        String answer = "";
        char[] a = my.toLowerCase().toCharArray();
        Arrays.sort(a);
        answer = new String(a);
        return answer;
    }
}  