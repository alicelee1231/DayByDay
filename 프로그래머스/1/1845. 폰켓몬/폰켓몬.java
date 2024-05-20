import java.util.*;

class Solution {
    public int solution(int[] nums) {
        HashSet<Integer> hash = new HashSet<>();
        int limit = nums.length / 2;
        for(int i = 0; i < nums.length; i++){
            hash.add(nums[i]);
        }
        return Math.min(hash.size(), limit);
    }
}
