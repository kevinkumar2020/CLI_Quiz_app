const question = require("./Quiz_Questions");

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const chalk = require("chalk");
let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.green

var answer = ""; 
var qNo = 1;
var score = 0;
var username = "";

var getQuestions = () =>{
    var data = question.filter((o) => o.no == qNo);
    data.forEach(nq => {
        console.log(cyan(`\nNo : ${nq.no}`));
        console.log(yellow(`Question : ${nq.q}`));
        console.log(cyan(`\na : ${nq.a}`));
        console.log(cyan(`b : ${nq.b}`));
        console.log(cyan(`c : ${nq.c}`));
        console.log(cyan(`d : ${nq.d}`));
        answer = nq.ans;
    })
};

var checkAnswer = () => {
    if(qNo <= 10){
        rl.question(title("\nGive Answer : "),(ans) => {
            if(ans == "a" || ans == "b" || ans == "c" || ans == "d"){
                if(ans == answer){
                    score += 5;
                    console.log(green("\nRight Answer : " + ans));
                    console.log(blueBright("Your Score : " + score));
                    qNo += 1;
                    repeat();
                }else{
                    score -= 2;
                    console.log(red("\nWrong Answer : " + ans));
                    console.log(blueBright("Your Score : " + score));
                    qNo += 1;
                    repeat();
                }
            }else{
                console.log(red("\nWrong Choice, Please try again"));
            }
        });
    }else{
        console.log(title("\nComplete Quiz..."));
        console.log(title(`\nUserName : ${username}  Your Final Score Is : ${score}`));
        rl.close();
    }
};

var repeat = () => {
    getQuestions();
    checkAnswer();
};

console.log(title("Welcome to Kevin's NodeJs Quiz..!"));
rl.question(title("\nPlease Enter Your Name : "),(ans) => {
    username = ans;
    repeat();
});