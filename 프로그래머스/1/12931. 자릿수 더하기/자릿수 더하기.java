import java.util.*;
import java.util.stream.Stream;

public class Solution {
    public int solution(int n) {
        int answer = 0;
    int[] digits = Stream.of(String.valueOf(n).split("")).mapToInt(Integer::parseInt).toArray();
        for(int i = 0; i<digits.length; i++){
            answer += digits[i];
                    System.out.println(answer);

        }

        
        
        return answer;
    }
}