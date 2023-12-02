const path = require("path");
const fs = require("fs");

export const day4_problem2 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => {
        return line.split(",").map(range => range.split("-").map(Number));
      })
      .map(pairOfRanges => {
        const firstElfRange = pairOfRanges[0];
        const secondElfRange = pairOfRanges[1];

        const firstRangeStart = firstElfRange[0];
        const firstRangeEnd = firstElfRange[1];

        const secondRangeStart = secondElfRange[0];
        const secondRangeEnd = secondElfRange[1];

        if (
          firstRangeStart <= secondRangeEnd &&
          secondRangeStart <= firstRangeEnd
        )
          return true;
        if (
          secondRangeStart <= firstRangeEnd &&
          firstRangeStart <= secondRangeEnd
        )
          return true;

        return false;
      })
      .reduce((acc, el) => acc + (el === true ? 1 : 0), 0);
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
};
