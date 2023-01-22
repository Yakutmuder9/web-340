// ============================================
// ; Title:  Assignment 3 – Node’s Module System
// ; Author: Professor Krasso
// ; Date:   21 October 2022
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 3 – Node’s Module System
// ;===========================================
"use strict";
const Team = require('./team');

// Create an array named teams that contains five team objects, using the Team class
const teams = [
    new Team('Alabama', 'Crimson Tide', 54),
    new Team('LSU', 'Tigers', 54),
    new Team('Georgia', 'Bulldogs', 54),
    new Team('Texas', 'Longhorns', 54),
    new Team('USC', 'Trojans', 54)
];

// return the array of Team objects
const getTeams = () => {
    return teams;
}

// calls the getTeams() function to get the array of Team objects
const getTeam = (name) => {
    return teams.find(value => value.name === name);
}

//  returns a formatted string that uses the team objects properties (name, mascot, and playerCount)
const displayTeam = (team) => {
    return (`Name: ${team.name}` + `\nMascot: ${team.mascot}` + `\nPlayer Count: ${team.playerCount}\n`);
}


module.exports = {
    getTeams,
    getTeam,
    displayTeam
};