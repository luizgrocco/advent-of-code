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

export const day3_problem2 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const lines = data.split("\n");
    const elfGroups = [];
    for (let i = 0; i < lines.length; i++) {
      if (i % 3 === 0) {
        elfGroups.push(lines.slice(i, i + 3));
      }
    }
    const answer = elfGroups
      .map(elfGroup => elfGroup.map(elf => [...new Set(elf.split(""))]).flat(1))
      .map(elfGroup => {
        let result = "";
        elfGroup.reduce((obj, letter) => {
          const sum = (obj[letter] || 0) + 1;
          obj[letter] = sum;
          if (sum === 3) {
            result = letter;
          }
          return obj;
        }, {} as { [k: string]: number });

        return result;
      })
      .map(letterToNumber)
      .reduce((acc, current) => acc + current, 0);

    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
