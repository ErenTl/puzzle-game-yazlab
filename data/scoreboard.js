// require("dotenv").config();

export async function getScoreboard() {
    const response = await fetch('/api/scoreboard');
    const data = await response.json();
    return data;
}
