import java.util.*;

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        String b = "";
        for(int i = 0; i < a / 4; i++){
            b += "long ";
        }
                    System.out.println(b + "int");

    }
}