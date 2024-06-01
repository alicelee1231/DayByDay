import java.util.*; 
import java.util.stream.Stream;
class Solution {
    public long solution(long n) {
        long answer = 0;
        int[] digits = Stream.of(String.valueOf(n).split(""))
	       .mapToInt(Integer::parseInt)
               .toArray();
          for (int i = 0; i < digits.length - 1; i++) {
            for (int j = 0; j < digits.length - i - 1; j++) {
                if (digits[j] < digits[j + 1]) {
                    int temp = digits[j];
                    digits[j] = digits[j + 1];
                    digits[j + 1] = temp;
                }
            }
        }
        for (int i = 0; i < digits.length; i++) {
            answer = answer * 10 + digits[i];
        }
        return answer;
    }
}