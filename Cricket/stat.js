var tem1PlyRuns = localStorage.getItem("team1Runs").split(',');
var tem2PlyRuns = localStorage.getItem("team2Runs").split(',');
var tem1Total = localStorage.getItem("team1Total");
var tem2Total = localStorage.getItem("team2Total");
var tem1PlyObj = JSON.parse(localStorage.getItem("playerObj"));
var tem2PlyObj = JSON.parse(localStorage.getItem("player2Obj"));
var tem1HighRun = 0;
var tem2HighRun = 0;
function matchResult() {
    tem1HighRun = parseInt(tem1PlyRuns[0]);
    for (i = 0; i < tem1PlyRuns.length - 1; i++) {
        if (tem1HighRun < parseInt(tem1PlyRuns[i + 1])) {
            tem1HighRun = parseInt(tem1PlyRuns[i + 1]);
        }
    }
    //alert(tem1HighRun);
    tem2HighRun = parseInt(tem2PlyRuns[0]);
    for (i = 0; i < tem2PlyRuns.length - 1; i++) {
        if (tem2HighRun < parseInt(tem2PlyRuns[i + 1])) {
            tem2HighRun = parseInt(tem2PlyRuns[i + 1]);
        }
    }
    //alert(tem2HighRun);
    for (i = 0; i < 10; i++) {
        var rid = "r" + i;
        var bid = "b" + i;
        document.getElementById(rid).innerHTML = ((tem1PlyObj[i].total == 0) ? "0" : tem1PlyObj[i].total);
        document.getElementById(bid).innerHTML = ((tem1PlyObj[i].balls == 6 && tem1PlyObj[i].total == 0) ? "Yet to bat" : (6 - tem1PlyObj[i].balls));
    }
    document.getElementById("t1").innerHTML = localStorage.getItem("team1Total");
    //document.getElementById("matchSummary").innerHTML += "<span>Highest run scorer: "+tem1HighRun+"</span><br><br><br>";  
    for (i = 0; i < 10; i++) {
        var rid = "rr" + i;
        var bid = "bb" + i;
        document.getElementById(rid).innerHTML = ((tem2PlyObj[i].total == 0) ? "0" : tem2PlyObj[i].total);
        document.getElementById(bid).innerHTML = ((tem2PlyObj[i].balls == 6 && tem2PlyObj[i].total == 0) ? "Yet to bat" : (6 - tem2PlyObj[i].balls));
    }
    document.getElementById("t2").innerHTML = localStorage.getItem("team2Total");
    document.getElementById("result").innerHTML = "<h2>" + localStorage.getItem("winner") + "</h2>";
    //document.getElementById("matchSummary").innerHTML += "<span>Highest run scorer: "+tem2HighRun+"</span><br>";
    var mofMatch = (tem1HighRun > tem2HighRun) ? tem1HighRun : tem2HighRun;
    document.getElementById("result").innerHTML += "<h2>Man of the match: " + mofMatch + "</h2>";
}
