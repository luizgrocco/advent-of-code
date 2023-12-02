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

// const problem2 = input.split("\n").map(
//   (
//     line,
//   ) => [
//     line.match(/\d|one|two|three|four|five|six|seven|eight|nine/),
//     line.reverse,
//   ],
// ).filter((matches) => matches.length > 0).map(
//   (matches) =>
//     [matches.at(0), matches.at(-1)].map((match) => match?.at(0)).map((el) => {
//       switch (el) {
//         case "one":
//           return "1";
//         case "two":
//           return "2";
//         case "three":
//           return "3";
//         case "four":
//           return "4";
//         case "five":
//           return "5";
//         case "six":
//           return "6";
//         case "seven":
//           return "7";
//         case "eight":
//           return "8";
//         case "nine":
//           return "9";
//         default:
//           return el;
//       }
//     }),
// ).map((arr) => arr.join("")).map(Number).reduce((acc, curr) => acc + curr, 0);

// console.log({ problem2 });
// Deno.test("Day Problem 2", () => {
//   assertEquals(problem2, 53355);
// });
