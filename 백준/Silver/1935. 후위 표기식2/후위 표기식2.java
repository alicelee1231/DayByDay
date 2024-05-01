import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String[] str = br.readLine().split("");
        double[] arr = new double[N];
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        Stack<Double> st = new Stack<>();
        
        for(int i = 0; i <str.length;i++){
            char c = str[i].charAt(0);
            if('A' <= c && c <= 'Z' ){
                st.push(arr[c-'A']);
            }else{
                double d1 = st.pop();
                double d2 = st.pop();
                double d3 = 0.0;
                switch(c){
                    case '*':
                        d3 = d1 * d2;
                        break;
                    case '+' :
                        d3 = d1 + d2;
                        break;
                    case '-':
                        d3 = d2-d1;
                        break;
                    case '/' :
                        d3 = d2/d1;
                        break;
                }
                st.push(d3);
            }
        }      
        System.out.printf("%.2f",st.pop());
    }
    
}