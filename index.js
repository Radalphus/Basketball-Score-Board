let scores = { home: 0, guest: 0 };

function addScore(team, points) {
    scores[team] += points;
    document.getElementById(team + "-team-score").textContent = scores[team];
}
