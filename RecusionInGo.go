package main
import "fmt"
func main(){
	fmt.Println(recursion1(5)) //Factorial

	recursion2(1, 0, 5) //Fibonacci Series
}
func recursion1(a int) int {
	if a > 0 {
		return recursion1(a-1) * a
	}
	return 1
}

func recursion2(a, c, b int) int {
	if b > 0 {
		numb := a
		fmt.Println(a)
		return recursion2(a+c, numb, b-1)
	}
	return 0
  }
