const path = require("path");
const fs = require("fs");

const letterToNumber = (letter: string) => {
  const code = letter.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return code - 38;
  } else {
    return code - 96;
  }
};

export const day3_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => line.split(""))
      .map(line => {
        const left = line.slice(0, line.length / 2);
        const right = line.slice(line.length / 2, line.length);
        let repeated;
        for (let letterIndex = 0; letterIndex < line.length; letterIndex++) {
          if (
            left.includes(line[letterIndex]) &&
            right.includes(line[letterIndex])
          ) {
            repeated = line[letterIndex];
            break;
          }
        }
        return repeated as string;
      })
      .map(letterToNumber)
      .reduce((acc, current) => acc + current, 0);

    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
