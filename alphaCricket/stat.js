var sum1=localStorage.getItem("ScoreOne");
var sum2=localStorage.getItem("ScoreTwo");

document.getElementById("s1").innerHTML=sum1;
document.getElementById("s2").innerHTML=sum2;

if(sum1>sum2){
    document.getElementById("w").innerHTML="Player One";
}else{
    document.getElementById("w").innerHTML="Player Two";
}