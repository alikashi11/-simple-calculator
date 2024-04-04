#! /usr/bin/cov node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message:"eneter the first number",type:"number",name:"firstnumber"},
    {message :"enter the second number",type: "number",name:"secondnumber"},
    {message:"selectone of the operator to perform the opreations",type:"list",name:"operator",choices:["Addition","Subtraction","Multiplication","Division"]}
]);
if (answer . operator==="Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}else if (answer. operator ==="Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
}else if (answer. operator ==="Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
}else if (answer. operator ==="Division"){
    console.log(answer.firstnumber  / answer.secondnumber);
}else{
    console.log("please select valid operator")
}
