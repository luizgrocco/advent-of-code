const main = () => {
  // Problem 1:
  const input = Deno.readTextFileSync("input.txt");
  const lines = input.split("\n").map((line) => {
    return line.split("   ");
  });
  const listA: number[] = [];
  const listB: number[] = [];
  lines.forEach(([a, b]) => {
    listA.push(Number(a));
    listB.push(Number(b));
  });

  listA.sort();
  listB.sort();

  const differenceList = [];
  for (let i = 0; i < listA.length; i++) {
    differenceList.push(Math.abs(listA[i] - listB[i]));
  }

  const problem1 = differenceList.reduce((a, b) => a + b, 0);
  console.log("problem 1: ", problem1);

  // Problem 2:
  const frequencyList = [];
  for (const item of listA) {
    const firstIndex = listB.findIndex((b) => b === item);
    if (firstIndex !== -1) {
      const lastIndex = listB.findLastIndex((b) => b === item);
      const count = lastIndex - firstIndex + 1;
      frequencyList.push(count * item);
    }
  }

  const problem2 = frequencyList.reduce((a, b) => a + b, 0);
  console.log("problem 2: ", problem2);
};

main();
