import java.util.ArrayList;
import java.util.List;
import java.util.*;
class Solution {
    public int[] solution(long n) {
        String str = Long.toString(n);
        int[] answer = new int[str.length()];
        int[] re = new int[str.length()];
        for (int i = 0; i < str.length(); i++) {
            answer[i] = str.charAt(i) - '0'; 
        }
        for(int i = answer.length-1, j = 0; i >=0; i--, j++){
            re[j] = answer[i];

        }
        return re;
    }
}
