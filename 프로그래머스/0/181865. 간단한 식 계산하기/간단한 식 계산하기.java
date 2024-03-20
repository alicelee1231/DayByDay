import java.util.*;
import java.util.stream.Stream;

class Solution {
    public int solution(String binomial) {
        int answer = 0;
        String[] a = binomial.split(" ");
        int c = Integer.parseInt(a[0]);
        int d = Integer.parseInt(a[2]);
        if(a[1].equals("*")){
            answer = c * d;
        }else if(a[1].equals("-")){
            answer = c - d;
        }else{
            answer = c + d;
        }
        return answer;
    }
}