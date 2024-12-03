const main = () => {
  // Problem 1:
  const input = Deno.readTextFileSync("input.txt");
  const reports = input
    .split("\n")
    .map((report) => report.split(" "))
    .map((report) => report.map((level) => parseInt(level)));

  const problem1 = (reports: number[][]) => {
    let safeReports = 0;
    for (const report of reports) {
      if (report.length <= 2) {
        safeReports++;
        continue;
      }

      const [firstLevel, ...levels] = report;

      let isSafe = true;
      let previousLevel = firstLevel;
      let isReportIncreasing: null | boolean = null;
      for (const level of levels) {
        const differenceInLevel = level - previousLevel;
        const isLevelIncreasing = differenceInLevel > 0;

        if (isReportIncreasing === null) {
          isReportIncreasing = isLevelIncreasing;
        }

        previousLevel = level;
        if (
          isReportIncreasing !== isLevelIncreasing ||
          Math.abs(differenceInLevel) < 1 ||
          Math.abs(differenceInLevel) > 3
        ) {
          isSafe = false;
          break;
        }
      }

      if (isSafe) safeReports++;
    }

    console.log(safeReports);
  };

  problem1(reports);

  // Problem 2:
  const problem2 = (reports: number[][]) => {
    let safeReports = 0;

    const checkReport = (
      report: number[],
      skip = -1,
      hasSkipped = false
    ): boolean => {
      if (report.length <= 2) {
        return true;
      }

      let isSafe = true;
      let isReportIncreasing: null | boolean = null;

      for (let i = 0; i < report.length - 1; i++) {
        if (i === skip) continue;

        const currLevel = report[i];
        const nextLevel = report[i + 1];
        const differenceInLevel = currLevel - nextLevel;
        const isLevelIncreasing = differenceInLevel > 0;

        if (isReportIncreasing === null) {
          isReportIncreasing = isLevelIncreasing;
        }

        if (
          isReportIncreasing !== isLevelIncreasing ||
          Math.abs(differenceInLevel) < 1 ||
          Math.abs(differenceInLevel) > 3
        ) {
          if (!hasSkipped)
            return (
              checkReport(report, i, true) || checkReport(report, i + 1, true)
            );

          isSafe = false;
          break;
        }
      }

      return isSafe;
    };

    for (const report of reports) {
      if (checkReport(report)) {
        safeReports++;
      }
    }

    console.log(safeReports);
  };

  problem2(reports);
};

main();
