package main

import (
	"bufio"
	"errors"
	"fmt"
	"math"
	"os"
	"strconv"
)

func main() {
	// fmt.Println("Hello World")

	num1 := 5
	num2 := 0
	num3 := num1 + num2
	if num3 > 6 {
		fmt.Println("Gr Than 6")
	} else {
		fmt.Println("Smaller than 6")
	}

	//Array
	// var array [5]int

	array := [5]int{}
	array[1] = 3
	fmt.Printf("Hello Array %v \n", array)

	slices := []int{4, 3, 2, 1}
	slices = append(slices, 5)
	fmt.Printf("Println %v \n", slices)

	fmt.Printf("Hello Slices %v\n", slices)

	for i := 0; i < len(slices); i++ {
		fmt.Printf("%v : %v\n", i, slices[i])
	}

	fmt.Println("Now using Range Keyword")

	for index, element := range slices {
		fmt.Printf("%v : %v\n", index+1, element)
	}

	fmt.Println("Using Anonymous Element Concept")

	for _, element := range slices {
		fmt.Printf("%v\n", element)
	}

	//Assingment1
	fmt.Println("Assingment 1")
	sliceAssing := []int{1, 1, 2, 3, 4, 2, 4, 5, 6, 1}
	for i, element1 := range sliceAssing {
		for j, element2 := range sliceAssing {
			if element1 == element2 && j > i {
				fmt.Println(element1)
			}
		}
	}

	fmt.Println("Another Take On Assingment")

	for i := 0; i < len(sliceAssing)-1; i++ {
		for j := i + 1; j < len(sliceAssing); j++ {
			if sliceAssing[i] == sliceAssing[j] {
				fmt.Println(sliceAssing[i])
				break
			}
		}
	}

	//Map

	newMap := make(map[string]int)
	newMap["Traingle"] = 3
	newMap["Square"] = 4
	newMap["Pentagon"] = 5

	for key, value := range newMap {
		fmt.Println("Key :", key, "| Value :", value)
	}

	//printing using printf

	for key, value := range newMap {
		fmt.Printf("Key : %v | Value : %v\n", key, value)

	}

	bol := true
	fmt.Printf("%T \n", bol)

	//New Functions

	fmt.Println(sum(2, 3))

	//Func 2
	result, err := sqrt(64)
	if err == nil {
		fmt.Println(result)
	} else {
		fmt.Println(err)
	}

	//Inner Func Type 2
	innerFunc := func(x int) int {
		return x
	}(3)
	fmt.Println(innerFunc)

	innerFunc2 := func(x int) {
		fmt.Println(x * 2)
	}
	innerFunc2(2)

	//Function That Takes in AnotherFunc

	fmt.Println("Function Testing 1...2....3")

	testing := func(x, y int) (int, string, error) {
		return x * y, "Hello There , Whatsapp Here", errors.New("You got an error")
	}

	testingSomething(testing)

	//Function Returning a Function

	fmt.Println(returnsANewFunc(3)(2))

	//Printing Stuff
	var printStuff string = fmt.Sprintf("Hello world")

	fmt.Println("size =", len(printStuff))

	//taking input using Scanner

	scanner := bufio.NewScanner(os.Stdin)
	fmt.Println("Input Text")
	scanner.Scan()
	inputNo, err := strconv.ParseInt(scanner.Text(), 10, 64)
	if err == nil {
		fmt.Println(inputNo)
	} else {
		fmt.Println("couldn't convert to integer", err)
	}

	//uintptr

	var value uintptr
	fmt.Println(value)

}

func sum(a int, b int) int {
	return a + b
}

func sqrt(x float64) (float64, error) {
	defer fmt.Println("Defer Execution")
	if x < 0 {
		return 0, errors.New("-ive Number")
	}
	return math.Sqrt(x), nil
}

func testingSomething(newFunc func(x, y int) (int, string, error)) {
	result, something, err := newFunc(7, 3)

	fmt.Println(result)
	fmt.Println(something)
	fmt.Println(err)

}

func returnsANewFunc(x int) func(x int) string {

	fmt.Println(x * 2)

	return func(x int) string {
		return "Hello There This Func Does Nothing"
	}
}
