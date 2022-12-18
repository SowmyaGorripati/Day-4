//TASK-1

//Declare four variables without assigning values and print them in console
/*let a="";
let b="";
let c="";
let d="";
console.log(a,b,c,d);

//How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
first_name="Sowmya";
last_name="Gorripati";
marital_status="Single";
country="India";
age="23";
console.log(first_name, last_name +"\n" + marital_status+"\n"+country+"\n" +age);

//Declare variables to store your first name, last name, marital status, country and age in a single line

let [first_name, last_name, marital_status,country,age] = ["Sowmya", "Gorripati", "Single", "india",23];
console.log(first_name, last_name +"\n" + marital_status+"\n"+country+"\n" +age);


//Declare variables and assign string, boolean, undefined and null data types
let str="abc";
let bool=true;
let undefined_val;
let null_value = null;
console.log(str +"\n"+bool+"\n"+undefined_val+"\n"+null_value);


//Convert the string to integer
let a="2";
console.log(parseInt(a));
console.log(Number(a));
console.log(+a);


//Write 6 statement which provide truthy & falsey values.
let x;
x = 1;   
x = '1'; 
x = [1];

console.log(1=='1');
console.log(1==[1]);
console.log('1'==[1]);

console.log(1==='1');
console.log(1===[1]);
console.log('1'===[1]);


//TASK-2

//Square of a number
console.log(Math.pow(2,2));
//Swapping 2 numbers
let[a,b]=[1,2];
console.log([a,b]=[b,a])
//Addition of 3 numbers
let[x,y,z]= [1,2,3]
console.log(x+y+z)
//Celsius to Fahrenheit conversion
let Celsius=30;
console.log(Celsius*(9/5)+32);
//Meter to miles
let meter = 20;
console.log(meter/1609.344)
//Pounds to kg
let pounds=20;
console.log("KGs : ",pounds*5);
//Calculate Batting Average
let runs=1000
let notout=10
let matches=100
let out=matches-notout
let batting_avg=runs/out
console.log('batting_avg_is '+batting_avg)
//Calculate five test scores and print their average
let test_scores=[10,20,30,40,50]
let sum=0
for (let i=0; i<test_scores.length;i+=1){
    sum+=i
}
let avg_test_scores=sum/test_scores.length

console.log('average_batting_test_score_is '+avg_test_scores)

//Power of any number x ^ y.
let num1=2
let num2=2
console.log(Math.pow(num1,num2))

//Calculate Simple Interest
let p=10000
let r=10
let t=2
let Simple_Intrest=p*t*r/(100)
console.log('simple_intrest is '+Simple_Intrest)

//Calculate area of an equilateral triangle
let side=2
let equilateral_area=(Math.sqrt(3)/4)*Math.pow(side,2)
console.log('equilateral area is '+equilateral_area)

//Area Of Isosceles Triangle
let base=4
let height=3
let isoscles_area= 1/2*(base*height)
console.log('area of isoscles triangle is '+isoscles_area)

//Volume Of Sphere
let radius=3
let pi=3.141
let volume_of_sphere=4/3 * pi * (Math.pow(radius,3))
console.log('volume of sphere is '+volume_of_sphere)

//Volume of prism
let height1=3
let volume_of_prism=base_area*height1
console.log('Volume of prism '+volume_of_prism)

//Find area of a triangle.
let area_of_triangle=(base * height)/2
console.log('area of _triangle is '+area_of_triangle)

//Give the Actual cost and Sold cost, Calculate Discount Of Product
let actual_cost=100
let Sold_cost=99
console.log('discount is '+actual_cost-Sold_cost)

