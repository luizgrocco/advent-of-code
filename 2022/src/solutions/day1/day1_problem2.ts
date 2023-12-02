const fs = require("fs");
const path = require("path");

export const day1_problem2 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const summedCalories = data
      .split("\n\n")
      .map(subgroup => subgroup.split("\n"))
      .map(calorieGroup => calorieGroup.map(el => Number(el)))
      .map(calorieGroup =>
        calorieGroup.reduce((acc, current) => acc + current, 0)
      )
      .sort();

    let threeHighest: number[] = [];
    while (threeHighest.length < 3) {
      const number = summedCalories.pop();
      if (typeof number === "number") {
        threeHighest.push(number);
      }
    }
    const answer = threeHighest.reduce((acc, current) => acc + current, 0);
    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
