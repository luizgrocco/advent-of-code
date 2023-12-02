const path = require("path");
const fs = require("fs");

export const day5_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data;
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
};
