import java.util.*;

public class Main{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        int gcd = getGcd(a, b);
        
        System.out.println(gcd);
        System.out.println((a * b) / gcd);
    }
    
    private static int getGcd(int a, int b){
        if(b == 0){
            return a;
        } else {
            return getGcd(b, a % b);
        }
    }
}
