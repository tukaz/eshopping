import React from "react";
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

function TeamsList() {
  const [teams, setTeams] = React.useState(TEAMS);

  function getTotalScore(scoreObj) {
    return scoreObj.reduce(function (prev, cur) {
      return prev + cur.score;
    }, 0);
  }
  function sortTeams(order) {
    return () => {
      console.log("calculating...");
      const sortedArray = Array.from(TEAMS);
      return sortedArray.sort((teamA, teamB) => {
        const totalScoreA = getTotalScore(teamA.games);
        const totalScoreB = getTotalScore(teamB.games);
        console.log(order, "order2");
        if (order === "asc") {
          return totalScoreB > totalScoreA;
        } else {
          return totalScoreB < totalScoreA;
        }
      });
    };
  }
  // Order teams by score (highest to lowest)
  const orderTeamByScoreHighestToLowest = () => {
    setTeams(sortTeams("asc")());
  };

  const orderTeamByScoreLowestToHighest = () => {
    setTeams(sortTeams("desc")());
  };

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    setTeams(teams.filter((team) => team.players.length > 3));
  }

  return (
    <div>
      <button onClick={() => setTeams(TEAMS)}>Initial list</button>

      <button onClick={orderTeamByScoreHighestToLowest}>
        Highest to Lowest
      </button>
      <button onClick={orderTeamByScoreLowestToHighest}>
        Lowest to Highest
      </button>
      <button onClick={teamsWithMoreThanThreePlayers}>
        Teams with at least 3 players
      </button>

      <ul id="teams">
        {teams.map((team, i) => {
          var totalScore = getTotalScore(team.games);

          return (
            <li key={i}>
              {team.name} / {team.players.length} / {totalScore}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Test = () => {
  return <TeamsList />;
};
export default Test;
