let homeScoreEl = document.getElementById("home-team-score");
let guestScoreEl = document.getElementById("guest-team-score");
let homeScore = 0;
let guestScore = 0;

function addHomeScore(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function addGuestScore(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}
