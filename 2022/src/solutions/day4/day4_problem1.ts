const path = require("path");
const fs = require("fs");

export const day4_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => {
        return line.split(",").map(range => range.split("-").map(Number));
      })
      .map(pairOfRanges => {
        const firstEl = pairOfRanges[0];
        const secondEl = pairOfRanges[1];

        if (firstEl[0] <= secondEl[0] && firstEl[1] >= secondEl[1]) return true;
        if (secondEl[0] <= firstEl[0] && secondEl[1] >= firstEl[1]) return true;
        return false;
      })
      .reduce((acc, el) => acc + (el === true ? 1 : 0), 0);
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
};
