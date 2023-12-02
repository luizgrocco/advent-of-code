import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";

const input = Deno.readTextFileSync("./input_day1_p1.txt");

// Problem 1
const problem1 = input.split("\n").map((line) => line.replaceAll(/\D/g, ""))
  .filter(Boolean).map(
    (digits) => digits.at(0)! + digits.at(-1)!,
  ).map(Number).reduce((acc, current) => acc + current, 0);

Deno.test("Problem 1", () => {
  assertEquals(problem1, 54644);
});

const myMap: { [key: string]: string } = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
};

const problem2 = input.split("\n").map(
  (
    line,
  ) => {
    const firstMatchArr = line.match(
      /\d|one|two|three|four|five|six|seven|eight|nine/g,
    );

    if (!firstMatchArr) return [];

    const firstMatch = firstMatchArr[0];

    const partialResult2 = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].map((el) => line.lastIndexOf(el));

    const indexOfPartialResult2 = Math.max(...partialResult2);

    const winner = (partialResult2.indexOf(indexOfPartialResult2) + 1) % 9;
    const secondMatch = winner === 0 ? "9" : String(winner);
    return [myMap[firstMatch], secondMatch];
  },
).filter((matches) => matches.length > 0).map((arr) => arr.join("")).map(Number)
  .reduce((acc, curr) => acc + curr, 0);

console.log({ problem2 });
Deno.test("Day Problem 2", () => {
  assertEquals(problem2, 53348);
});
