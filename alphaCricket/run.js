var oneScore=[];
var twoScore=[];
var r1=0;
var r2=0;
var sum1=0;
var sum2=0;
var score1=0;
var score2=0;

function run1(){
    // if (p==0){
    //     score=0;
    //     p++;
    //     }
    if (oneScore.length<=17){
        r1=Math.floor(Math.random()*7);
        document.getElementById("r1").innerHTML=r1;
        score1+=r1;
        document.getElementById("s1").innerHTML=score1;
        oneScore.push(r1);
    }else{
        //(oneScore.length==18);
        alert('Innings over');
        let totalScore1=oneScore.reduce((currentTotal,item) => currentTotal+item);
        console.log(totalScore1);
    }
    

    const add=(a,b)=>a+b;
    sum1=oneScore.reduce(add);
    // localStorage.setItem("PlayerOne",oneScore);
    localStorage.setItem("ScoreOne",sum1);  
    // console.log(sum1);

}

function run2(){
    if (twoScore.length<=18){
        r2=Math.floor(Math.random()*7);
        document.getElementById("r2").innerHTML=r2;
        score2+=r2;
        document.getElementById("s2").innerHTML=score2;
        twoScore.push(r2);

    }else{
        //(oneScore.length==18);
        alert('Innings over');
        let totalScore1=oneScore.reduce((currentTotal,item) => currentTotal+item);
        console.log(totalScore1);
    }
    
    const add2=(a,b)=>a+b;
    sum2=twoScore.reduce(add2);
    console.log(sum2);
    localStorage.setItem("ScoreTwo",sum2);

}
console.log(sum1);
console.log(sum2);


//ask Arun sir why ls is not working ouside out of function but is saved in console

// localStorage.setItem("PlayerTwo",twoScore);


// button=document.querySelector('b1');
// button.addEventListener('onclick',r1); 

