import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";

const input = Deno.readTextFileSync("./input_day2_p1.txt");

const problem1 = input.split("\n").filter(Boolean).map((game) => {
  const gameIdMatch = game.match(/^Game (\d+)/);
  const gameId = gameIdMatch![1];

  const rounds = game.split(";");
  return rounds;
});

console.log({ problem1 });
Deno.test("Day 2 Problem 1", () => {
  assertEquals("", "");
});
