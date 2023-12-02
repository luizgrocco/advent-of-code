import {
  day1_problem2,
  day2_problem1,
  day2_problem2,
  day3_problem1,
  day3_problem2,
  day4_problem1,
  day4_problem2,
  day5_problem1,
} from "./solutions";

const main = (mode: "all" | "last"): void => {
  const fns = [
    day1_problem2,
    day2_problem1,
    day2_problem2,
    day3_problem1,
    day3_problem2,
    day4_problem1,
    day4_problem2,
    day5_problem1,
  ];

  if (mode === "all") {
    fns.forEach(fn => fn());
  } else if (mode === "last") {
    fns[fns.length - 1]();
  }
};

main("last");
