import java.util.ArrayList;

public class Solution {
    public int[] solution(int[] arr) {
        ArrayList<Integer> answer = new ArrayList<>();
        ArrayList<Integer> l = new ArrayList<>();
        
        for (int i : arr) {
            l.add(i);
        }
        
        for (int i = 0; i < arr.length - 1; i++) {
            if (l.get(i) != l.get(i + 1)) {
                answer.add(l.get(i));
            }
        }
        
        answer.add(l.get(arr.length - 1));
        
        int[] result = new int[answer.size()];
        for (int i = 0; i < answer.size(); i++) {
            result[i] = answer.get(i);
        }
        
        return result;
    }
}
