const fs = require("fs");
const path = require("path");

type Move1 = "A" | "B" | "C";
type Move2 = "X" | "Y" | "Z";

const calculatePoints = (move1: Move1, move2: Move2): number => {
  switch (move1) {
    case "A":
      switch (move2) {
        case "X":
          return 3;
        case "Y":
          return 6;
        case "Z":
          return 0;
      }
    case "B":
      switch (move2) {
        case "X":
          return 0;
        case "Y":
          return 3;
        case "Z":
          return 6;
      }
    case "C":
      switch (move2) {
        case "X":
          return 6;
        case "Y":
          return 0;
        case "Z":
          return 3;
      }
  }
};

const movePoint = (move: Move2): number => {
  switch (move) {
    case "X":
      return 1;
    case "Y":
      return 2;
    case "Z":
      return 3;
  }
};

export const day2_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => line.split(" "))
      .map(
        ([opponentMove, myMove]) =>
          calculatePoints(opponentMove as Move1, myMove as Move2) +
          movePoint(myMove as Move2)
      )
      .reduce((acc, current) => acc + current, 0);
    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
