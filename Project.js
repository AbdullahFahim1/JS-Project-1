const startBtn = document.querySelector(".start-btn button");
const rule = document.querySelector(".rule");
const exit = document.querySelector(".btns .exit");
const continu = document.querySelector(".btns .continue");
const question = document.querySelector(".question-1");
const nextbtn = document.querySelector(".nextbtn");
const timer = document.querySelector(".timer .second");
const timeliner = document.querySelector(".questionHeader .timeline")
const result = document.querySelector(".result");
const replaybtn = document.querySelector(".buttons .replay");
const quitbtn = document.querySelector(".buttons .quit");

startBtn.onclick = ()=>{
    rule.classList.add("activeRule")
}
exit.onclick = ()=>{
    rule.classList.remove("activeRule")
}
continu.onclick = ()=>{
    question.classList.add("startQuiz");
    startTimer(15)
    startTimerLine(0)
    ShowQuestion(0)
}


let quesCount = 0;
let counter;
let timeValue = 15;
let counterLine;
let widthValue = 0;
let userScore = 0;
nextbtn.onclick = ()=>{
    
    if(quesCount <ques.length - 1){
        quesCount ++
        clearInterval(counter);
        startTimer(timeValue);

        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextbtn.style.display = "none";
        ShowQuestion(quesCount);
        

    }else{
        
        console.log("You have complete Your Task ");
        showREsult()
    }
}

function ShowQuestion(index){
    const span = document.querySelector(".span");
    let quesOption = document.querySelector(".ques-1")
    let optionTag = `<div class="ques-1-option">` + ques[index].options[0] + `</div>` +
                    `<div class="ques-1-option">` + ques[index].options[1] + `</div>`+
                    `<div class="ques-1-option">` + ques[index].options[2] + `</div>`+
                    `<div class="ques-1-option">` + ques[index].options[3] + `</div>`
    let quesTag = "<span>" + ques[index].num + ". " + ques[index].question + "</span>"
    span.innerHTML = quesTag;
    quesOption.innerHTML = optionTag;
    const total_Ques = document.querySelector(".total-Ques");
    let total_Ques_tag ="<p>" + ques[index].num + ' of '+ ques.length +' Question' + "</p>";
    total_Ques.innerHTML = total_Ques_tag;


    const option = quesOption.querySelectorAll(".ques-1-option");
    for(i=0; 1 < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

    
let tickIcon = '<div class="tick icon"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="cross icon"><i class="fas fa-times"></i></div>';
function optionSelected(answer){
    clearInterval(counter)
    clearInterval(counterLine)
    let userAns = answer.textContent;
    let correctAns = ques[quesCount].answer;
    let quesOption = document.querySelector(".ques-1");
    let activeOption = quesOption.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("wrong")
        console.log("Discorrect")
        answer.insertAdjacentHTML("beforeend", crossIcon);
        for(let i=0; i<activeOption; i++){
            if(quesOption.children[i].textContent == correctAns){
                quesOption.children[i].setAttribute("class", "ques-1-option correct");
                quesOption.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    for(let i=0; i<activeOption; i++){
        quesOption.children[i].classList.add("deactive")
    }
        nextbtn.style.display = "block";
}


function showREsult() {
    rule.classList.remove("activeRule");
    question.classList.remove("startQuiz");
    result.classList.add("activeReult");

    const scoreText = document.querySelector(".scoreText");
    if(userScore > 3){
        const scoreTag = '<p>Congratulation 😍 You Got <span>' + userScore + '</span> Out of <span>' + ques.length + '</span></p>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        const scoreTag = '<p>Carry On 😃 You Got <span>' + userScore + '</span> Out of <span>' + ques.length + '</span></p>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        const scoreTag = '<p>Sorry 😂 You Got <span>' + userScore + '</span> Out of <span>' + ques.length + '</span></p>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timers, 1000);
    function timers(){
        timer.textContent = time;
        time--
        if(time < 9){
            let addZero = timer.textContent;
            timer.textContent = 0 + addZero;
        }
        if(time<0){
            clearInterval(counter);
            timer.textContent = "00"
        }
    }
}
function startTimerLine(time){
        counterLine = setInterval(timeLine, 50);
        function timeLine(){
            time  += 1;
            timeliner.style.width = time + "px";
            if(time > 349){
                clearInterval(counterLine);
            }
        }
}
quitbtn.onclick = ()=>{
    window.location.reload();
}
replaybtn.onclick = ()=>{
    


    quesCount = 0;
    counter = 0
    timeValue = 15;
    counterLine = 0;
    widthValue = 0;
    userScore = 0;

    clearInterval(counter);
    startTimer(timeValue);

    clearInterval(counterLine);
    startTimerLine(widthValue);

        
    rule.classList.add("activeRule")
    result.classList.remove("activeReult");
    ShowQuestion(quesCount);


}