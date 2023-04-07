export async function getScoreboard() {
    const response = await fetch('http://localhost:3002/api/scoreboard');
    const data = await response.json();
    return data;
}
