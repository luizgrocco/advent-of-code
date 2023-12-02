const fs = require("fs");
const path = require("path");

type Move = "A" | "B" | "C";
type Outcome = "X" | "Y" | "Z";

const calculateMyMove = (move: Move, outcome: Outcome): Move => {
  switch (move) {
    case "A":
      switch (outcome) {
        case "X":
          return "C";
        case "Y":
          return "A";
        case "Z":
          return "B";
      }
    case "B":
      switch (outcome) {
        case "X":
          return "A";
        case "Y":
          return "B";
        case "Z":
          return "C";
      }
    case "C":
      switch (outcome) {
        case "X":
          return "B";
        case "Y":
          return "C";
        case "Z":
          return "A";
      }
  }
};

const calculateOutcomePoints = (outcome: Outcome): number => {
  switch (outcome) {
    case "X":
      return 0;
    case "Y":
      return 3;
    case "Z":
      return 6;
  }
};

const movePoint = (move: Move): number => {
  switch (move) {
    case "A":
      return 1;
    case "B":
      return 2;
    case "C":
      return 3;
  }
};

export const day2_problem2 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => line.split(" "))
      .map(([opponentMove, outcome]) => [
        calculateMyMove(opponentMove as Move, outcome as Outcome),
        outcome,
      ])
      .map(
        ([myMove, outcome]) =>
          movePoint(myMove as Move) + calculateOutcomePoints(outcome as Outcome)
      )
      .reduce((acc, current) => acc + current, 0);
    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
