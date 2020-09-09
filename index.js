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
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].Year === 2014 && data[i].Stage === "Final") {
  //     let homeTeam2014 = data[i]["Home Team Name"];
  //     let awayTeam2014 = data[i]["Away Team Name"];
  //     let homeGoals = data[i]["Home Team Goals"];
  //     let awayGoals = data[i]["Away Team Goals"];
  //     let theWinner = data[i]["Win conditions"];
  //     //   infoAbout2014.push(
  //     //     homeTeam2014,
  //     //     awayTeam2014,
  //     //     homeGoals,
  //     //     awayGoals,
  //     //     theWinner
  //     //   );
  //     infoAbout2014.HomeTeam = homeTeam2014;
  //     infoAbout2014.AwayTeam = awayTeam2014;
  //     infoAbout2014.homeGoals = homeGoals;
  //     infoAbout2014.awayGoals = awayGoals;
  //     infoAbout2014.whoWon = theWinner;
  //   }
  // }
  // return infoAbout2014;
}
let data = accessData(fifaData);
console.log(data[0]["Home Team Name"]);
console.log(data[0]["Away Team Name"]);
console.log(data[0]["Home Team Goals"]);
console.log(data[0]["Away Team Goals"]);
console.log(data[0]["Win conditions"]);
// console.log(accessData(fifaData));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  let finalsData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Stage === "Final") {
      finalsData.push(data[i]);
    }
  }
  return finalsData;
}
getFinals(fifaData);
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array 
called `years` containing all of the years in the dataset */

function getYears(everyFinals) {
  let years = [];
  for (let i = 0; i < everyFinals(fifaData).length; i++) {
    //   console.log(everyFinals(data).length)
    // console.log(everyFinals(data)[i].Year)
    years.push(everyFinals(fifaData)[i].Year);
  }

  return years;
}

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine 
the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(everyFinals) {
  let winners = [];

  for (let i = 0; i < everyFinals(fifaData).length; i++) {
    if (
      everyFinals(fifaData)[i]["Home Team Goals"] >
      everyFinals(fifaData)[i]["Away Team Goals"]
    ) {
      winners.push(everyFinals(fifaData)[i]["Home Team Name"]);
    } else if (
      everyFinals(fifaData)[i]["Home Team Goals"] <
      everyFinals(fifaData)[i]["Away Team Goals"]
    ) {
      winners.push(everyFinals(fifaData)[i]["Away Team Name"]);
    } else {
      winners.push(everyFinals(fifaData)[i]["Win conditions"]);
    }
  }
  return winners;
}

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and 
returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(countryWinner, yearWon) {
  /*`In ${yearWon(getFinals)}, ${countryWinner(getFinals)} won the world cup!`;
   */
  let winningInfo = [];
  for (let i = 0; i < countryWinner(getFinals).length; i++) {
    let info = `In ${yearWon(getFinals)[i]}, ${
      countryWinner(getFinals)[i]
    } won the world cup!`;
    winningInfo.push(info);
  }
  return winningInfo;
}

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals 
and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  let home = data.map(data["Home Team Goals"]);
  let away = data.map();
  var sum = data.reduce((total, current) => {
    total += current["Home Team Goals"] + current["Away Team Goals"];
  }, 0);
  return sum;
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
