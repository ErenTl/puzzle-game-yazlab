// require("dotenv").config();

export async function getScoreboard() {
    const response = await fetch(process.env.API_URL+'/api/scoreboard');
    const data = await response.json();
    return data;
}
