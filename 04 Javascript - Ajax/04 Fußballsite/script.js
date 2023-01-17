let finalHTML;
let teamName1;
let teamName2;
let points1;
let points2;

function importer() {
    fetch("https://api.openligadb.de/getmatchdata/WM2022/2022").then((result)=> {
        result.json().then((data)=>{
            getData(data);
        })
    })
}

function getData(data) {
    let length = data.length;
    for (let i = 0; i < 4; i++) {
        teamName1 = data[i].team1.teamName;
        teamName2 = data[i].team2.teamName;
        points1 = data[i].matchResults[0].pointsTeam1;
        points2 = data[i].matchResults[0].pointsTeam2;
        console.log(teamName1, teamName2, points1, points2);
        finalHTML += getHTML(teamName1, teamName2, points1, points2);
    }
    document.getElementById("content").innerHTML = finalHTML;
}

function getHTML(teamName1, teamName2, points1, points2) {
    let html = "<ul>";
    html += "<li>" + teamName1 + " : " + points1 + " " + points2 + "</li>";
    html += "</ul>";
    return html;
};

importer() // JA NED WEGLÖSCHEN!!!