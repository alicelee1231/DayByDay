import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        if(a == b && b == c) {
            System.out.println(10000 + a * 1000);
        } else if (a == b || a == c || b == c) {
            int sameNum = (a == b) ? a : (a == c) ? a : c;
            System.out.println(1000 + sameNum * 100);
        } else {
            int maxNum = Math.max(Math.max(a, b), c);
            System.out.println(maxNum * 100);
        }
    }
}
