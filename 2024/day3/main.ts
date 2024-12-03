const main = () => {
  const input = Deno.readTextFileSync("input.txt");

  // Problem 1:
  const problem1 = () => {
    const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    const result = input
      .match(regex)
      ?.map((mul) => {
        const [first, second] = mul.match(/\d{1,3}/g) ?? [];
        return Number(first) * Number(second);
      })
      .reduce((num1, num2) => num1 + num2, 0);

    return result;
  };

  console.log("problem 1: ", problem1());

  const problem2 = () => {
    const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
    const stmts = input.match(regex);

    let enabled = true;
    let sum = 0;

    for (const stmt of stmts ?? []) {
      if (stmt === "do()") {
        enabled = true;
      } else if (stmt === "don't()") {
        enabled = false;
      } else {
        if (!enabled) {
          continue;
        }

        const [first, second] = stmt.match(/\d{1,3}/g) ?? [];
        sum += Number(first) * Number(second);
      }
    }
    return sum;
  };

  console.log("problem 2: ", problem2());
};

main();
