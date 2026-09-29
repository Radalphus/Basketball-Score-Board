let scores = {
    home: { points: 0, el: document.getElementById("home-team-score") },
    guest: { points: 0, el: document.getElementById("guest-team-score") }
};

function addScore(team, points) {
    scores[team].points += points;
    scores[team].el.textContent = scores[team].points;
}