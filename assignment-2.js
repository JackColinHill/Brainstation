//Assignmet 2: Problem Solving
//Jack Hill; April 29, 2018

function challenge1(){
    //This line creates an empty string variable named str 
    var str = ''
    //This for loop runs as long as 'i' is less then 6
    //'i' starts at 0 and has 1 added to its value every loop
    for (i=0;i<6;i++){
        //every time the loop runs, '#' is added to the intially empty string
        str += '#'
        //every loop, the value of variable str is printed 
        console.log(str)
    }
}
//This line runs the function...
challenge1();


function challenge2(number){
    //This if statement checks to see if the modulus 2 of the number is 0 (or even)
    if (number%2 == 0){
        console.log("The number is even")
    }
    //This if statement checks to see if the modulus 2 of the number is 1 (or odd)
    else if (number%2 == 1){
        //If this condition is fulfilled then it will print...
        console.log("The number is odd")
    }
    //if neither of the earlier statements are fulfilled then it will go to this else statement
    else{
        console.log("The parameter given is not a integer")
    }
}
//This line runs the function...
challenge2(95);