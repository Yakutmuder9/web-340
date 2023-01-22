const TeamManager = require("./team-manager");

// iterate over the array and display each team object using the displayTeam() function from the team-manager.js file.
console.log("-- DISPLAYING TEAMS --");
TeamManager.getTeams().forEach(team => console.log(TeamManager.displayTeam(team)));

// calls the getTeam() function to populate them with the teams that have the name "Albama"
const team1 = TeamManager.getTeam("Alabama");
console.log("\n\n-- DISPLAYING A SINGLE TEAMS --")
// Use displayTeam() function to display the team1 objects
console.log(TeamManager.displayTeam(team1));

// // calls the getTeam() function to populate them with the teams that have the name "Georgia"
const team2 = TeamManager.getTeam("Georgia");
console.log("\n-- DISPLAYING A SINGLE TEAMS --")
console.log(TeamManager.displayTeam(team2));

