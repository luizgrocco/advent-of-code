const main = () => {
  const input = Deno.readTextFileSync("input.txt");
  const lines = input.split("\n");
  const rules = lines
    .filter((line) => line.includes("|"))
    .reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {} as Record<string, boolean>);
  const updates = lines
    .filter((line) => line.includes(","))
    .map((updated) => updated.split(","));

  const problem1 = (
    rules: Record<string, boolean>,
    updates: string[][]
  ): number => {
    let result = 0;

    for (const update of updates) {
      let isValid = true;

      outerLoop: for (let i = 0; i < update.length - 1; i++) {
        for (let j = i + 1; j < update.length; j++) {
          if (rules[`${update[j]}|${update[i]}`] === true) {
            isValid = false;
            break outerLoop;
          }
        }
      }

      if (isValid) result += Number(update[Math.floor(update.length / 2)]);
    }

    return result;
  };

  console.log("problem 1: ", problem1(rules, updates));

  const problem2 = (
    rules: Record<string, boolean>,
    updates: string[][]
  ): number => {
    function lessThan(a: string, b: string) {
      return rules[`${a}|${b}`];
    }

    function greaterThan(a: string, b: string) {
      return rules[`${b}|${a}`];
    }

    const quickSort = (arr: string[]): string[] =>
      arr.length <= 1
        ? arr
        : [
            ...quickSort(arr.filter((el) => lessThan(el, arr.at(-1)!))),
            ...arr.filter((el) => el === arr.at(-1)),
            ...quickSort(arr.filter((el) => greaterThan(el, arr.at(-1)!))),
          ];

    let result = 0;

    for (const update of updates) {
      let isValid = true;

      outerLoop: for (let i = 0; i < update.length - 1; i++) {
        for (let j = i + 1; j < update.length; j++) {
          if (rules[`${update[j]}|${update[i]}`] === true) {
            isValid = false;
            break outerLoop;
          }
        }
      }

      if (!isValid)
        result += Number(quickSort(update)[Math.floor(update.length / 2)]);
    }

    return result;
  };
  console.log("problem 2: ", problem2(rules, updates));
};

main();
