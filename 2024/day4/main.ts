const main = () => {
  const input = Deno.readTextFileSync("input.txt");
  const grid = input.split("\n").map((row) => row.split(""));

  const isOutOfBounds = (
    point: [number, number],
    grid: string[][]
  ): boolean => {
    const [x, y] = point;
    const leftBound = 0;
    const rightBound = grid[0].length - 1;
    const upperBound = 0;
    const lowerBound = grid.length - 1;

    return x < leftBound || x > rightBound || y < upperBound || y > lowerBound;
  };

  // Problem 1:
  const problem1 = (grid: string[][]): number => {
    let xmasCount = 0;

    const check0 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;
      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY, pointX + 3], grid)
      )
        return false;
      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY][pointX + 1] === "M" &&
        grid[pointY][pointX + 2] === "A" &&
        grid[pointY][pointX + 3] === "S"
      );
    };

    const check180 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY, pointX - 3], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY][pointX - 1] === "M" &&
        grid[pointY][pointX - 2] === "A" &&
        grid[pointY][pointX - 3] === "S"
      );
    };

    const check270 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY + 3, pointX], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY + 1][pointX] === "M" &&
        grid[pointY + 2][pointX] === "A" &&
        grid[pointY + 3][pointX] === "S"
      );
    };

    const check90 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY - 3, pointX], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY - 1][pointX] === "M" &&
        grid[pointY - 2][pointX] === "A" &&
        grid[pointY - 3][pointX] === "S"
      );
    };

    const check45 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY - 3, pointX + 3], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY - 1][pointX + 1] === "M" &&
        grid[pointY - 2][pointX + 2] === "A" &&
        grid[pointY - 3][pointX + 3] === "S"
      );
    };

    const check135 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY - 3, pointX - 3], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY - 1][pointX - 1] === "M" &&
        grid[pointY - 2][pointX - 2] === "A" &&
        grid[pointY - 3][pointX - 3] === "S"
      );
    };

    const check315 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY + 3, pointX + 3], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY + 1][pointX + 1] === "M" &&
        grid[pointY + 2][pointX + 2] === "A" &&
        grid[pointY + 3][pointX + 3] === "S"
      );
    };

    const check225 = (point: [number, number], grid: string[][]): boolean => {
      const [pointX, pointY] = point;

      if (
        isOutOfBounds([pointY, pointX], grid) ||
        isOutOfBounds([pointY + 3, pointX - 3], grid)
      ) {
        return false;
      }

      return (
        grid[pointY][pointX] === "X" &&
        grid[pointY + 1][pointX - 1] === "M" &&
        grid[pointY + 2][pointX - 2] === "A" &&
        grid[pointY + 3][pointX - 3] === "S"
      );
    };

    const checkXmasAround = (
      point: [number, number],
      grid: string[][]
    ): number => {
      const [pointX, pointY] = point;

      let xmasCount = 0;

      if (check0([pointX, pointY], grid)) xmasCount++;
      if (check90([pointX, pointY], grid)) xmasCount++;
      if (check180([pointX, pointY], grid)) xmasCount++;
      if (check270([pointX, pointY], grid)) xmasCount++;
      if (check45([pointX, pointY], grid)) xmasCount++;
      if (check135([pointX, pointY], grid)) xmasCount++;
      if (check225([pointX, pointY], grid)) xmasCount++;
      if (check315([pointX, pointY], grid)) xmasCount++;

      return xmasCount;
    };

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        xmasCount += checkXmasAround([j, i], grid);
      }
    }

    return xmasCount;
  };

  console.log("problem 1: ", problem1(grid));

  // Problem 2:
  const problem2 = (grid: string[][]) => {
    let xMasCount = 0;

    const isXOutOfBounds = (
      point: [number, number],
      grid: string[][]
    ): boolean => {
      const [pointX, pointY] = point;

      return (
        isOutOfBounds([pointY - 1, pointX - 1], grid) ||
        isOutOfBounds([pointY - 1, pointX + 1], grid) ||
        isOutOfBounds([pointY + 1, pointX - 1], grid) ||
        isOutOfBounds([pointY + 1, pointX + 1], grid)
      );
    };

    const checkXMas1 = (point: [number, number], grid: string[][]): number => {
      let count = 0;
      const [pointX, pointY] = point;

      const center = grid[pointY][pointX];
      const topLeft = grid[pointY - 1][pointX - 1];
      const topRight = grid[pointY - 1][pointX + 1];
      const bottomLeft = grid[pointY + 1][pointX - 1];
      const bottomRight = grid[pointY + 1][pointX + 1];

      // Pattern:
      // M M
      //  A
      // S S
      if (
        topLeft === "M" &&
        topRight === "M" &&
        center === "A" &&
        bottomLeft === "S" &&
        bottomRight === "S"
      )
        count++;

      // Pattern:
      // M S
      //  A
      // M S
      if (
        topLeft === "M" &&
        topRight === "S" &&
        center === "A" &&
        bottomLeft === "M" &&
        bottomRight === "S"
      )
        count++;

      // Pattern:
      // S S
      //  A
      // M M
      if (
        topLeft === "S" &&
        topRight === "S" &&
        center === "A" &&
        bottomLeft === "M" &&
        bottomRight === "M"
      )
        count++;

      // Pattern:
      // S M
      //  A
      // S M
      if (
        topLeft === "S" &&
        topRight === "M" &&
        center === "A" &&
        bottomLeft === "S" &&
        bottomRight === "M"
      )
        count++;

      return count;
    };

    const checkXMas2 = (point: [number, number], grid: string[][]): number => {
      const [pointX, pointY] = point;
      let count = 0;

      const center = grid[pointY][pointX];
      const left = grid[pointY][pointX - 1];
      const up = grid[pointY - 1][pointX];
      const right = grid[pointY][pointX + 1];
      const down = grid[pointY + 1][pointX];

      // Pattern:
      // M M
      //  A
      // S S
      if (
        left === "M" &&
        up === "M" &&
        center === "A" &&
        right === "S" &&
        down === "S"
      )
        count++;

      // Pattern:
      // M S
      //  A
      // M S
      if (
        center === "A" &&
        left === "M" &&
        up === "S" &&
        right === "M" &&
        down === "S"
      )
        count++;

      // Pattern:
      // S S
      //  A
      // M M
      if (
        center === "S" &&
        left === "S" &&
        up === "S" &&
        right === "M" &&
        down === "M"
      )
        count++;

      // Pattern:
      // S M
      //  A
      // S M
      if (
        center === "A" &&
        left === "S" &&
        up === "M" &&
        right === "S" &&
        down === "M"
      )
        count++;

      return count;
    };

    for (let currX = 0; currX < grid.length; currX++) {
      for (let currY = 0; currY < grid[0].length; currY++) {
        if (!isXOutOfBounds([currY, currX], grid)) {
          xMasCount += checkXMas1([currY, currX], grid);
        }
      }
    }
    return xMasCount;
  };
  console.log("problem 2: ", problem2(grid));
};

main();
