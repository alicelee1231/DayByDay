import java.util.*;

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int a = 0;
        int b = 0;
        char [] arr = new char [s.length()];
         for (int i = 0; i < s.length(); i++) { 
             arr[i] = s.charAt(i);  
         }
        for(int i =0; i < s.length(); i++){
            if(arr[i] == 112 || arr[i] == 80){
                a++;
            }
            if(arr[i] == 121 || arr[i] == 89){
                b++;
            }
        }
        
        answer = a == b ? true : false;
        
        return answer;
    }
}