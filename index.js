import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
//task1
function accessData(data) {
  let infoAbout2014 = data.filter((finals) => {
    return finals.Year === 2014 && finals.Stage === "Final";
  });
  return infoAbout2014;
}
let data1 = accessData(fifaData);
console.log(data1[0]["Home Team Name"]);
console.log(data1[0]["Away Team Name"]);
console.log(data1[0]["Home Team Goals"]);
console.log(data1[0]["Away Team Goals"]);
console.log(data1[0]["Win conditions"]);
console.log(data1);
// console.log(accessData(fifaData));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  let finalsData = data.filter((games) => {
    return games.Stage === "Final";
  });
  // console.log(finalsData)
  return finalsData;
}
getFinals(fifaData);
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array 
called `years` containing all of the years in the dataset */

function getYears(everyFinals) {
  let years = everyFinals(fifaData);
  years.map((year) => {
    return year.Year;
  });
  return years;
}

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine 
the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(everyFinals, arr) {
  let results = everyFinals(arr);
  let winners = [];
  results.forEach((game) => {
    if (game["Home Team Goals"] > game["Away Team Goals"]) {
      winners.push(game["Home Team Name"]);
    } else if (game["Home Team Goals"] < game["Away Team Goals"]) {
      winners.push(game["Away Team Name"]);
    } else {
      winners.push(game["Win conditions"]);
    }
  });
  return winners;
}
console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and 
returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(countryWinner, yearWon) {
  const yearCountry = countryWinner(getFinals, fifaData).map(
    (winner, index) => {
      return `In ${
        yearWon(getFinals)[index].Year
      }, ${winner} won the world cup!`;
    }
  );
  return yearCountry;

  //old code disregard
  // let winningInfo = [];
  // for (let i = 0; i < countryWinner(getFinals).length; i++) {
  //   let info = `In ${yearWon(getFinals)[i]}, ${
  //     countryWinner(getFinals)[i]
  //   } won the world cup!`;
  //   winningInfo.push(info);
  // }
  // return winningInfo;
}

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals 
and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  let homeTeamGoals = data.reduce((totalGoals, game) => {
    return totalGoals + game["Home Team Goals"];
  }, 0);

  let homeTeamAvg = homeTeamGoals / data.length;

  let awayTeamGoals = data.reduce((totalGoals, game) => {
    return totalGoals + game["Away Team Goals"];
  }, 0);

  let awayTeamAvg = awayTeamGoals / data.length;

  return `The Average of the Home Team Goals is ${homeTeamAvg} and the Average of the Away team goals is ${awayTeamAvg}`;
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/*
foreach does not return an new array. Good for when you need to do something for every item in the array. Only good for grabbing data out of the object. 

map returns an array. Go through all items in the array and modify them in some way.

filter a combo fo foreach and map. almost always have an if statement inside. 
*/
