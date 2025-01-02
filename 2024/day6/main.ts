function main() {
  const input = Deno.readTextFileSync("input.txt");
  const mappedArea = input.split("\n");

  type Vec2D = [number, number];
  type Guard = {
    row: number;
    col: number;
    dir: number;
  };

  const move = ([posY, posX]: Vec2D, [dirY, dirX]: Vec2D): Vec2D => [
    posY + dirY,
    posX + dirX,
  ];

  const isOutOfBounds = ([x, y]: Vec2D, mappedArea: string[][]): boolean => {
    return (
      x < 0 || x >= mappedArea[0].length || y < 0 || y >= mappedArea.length
    );
  };

  const checkCollision = (
    [posY, posX]: Vec2D,
    mappedArea: string[][]
  ): boolean => mappedArea[posY][posX] === "#";

  function problem1(mappedArea: string[][]): number {
    const guard: Guard = {
      row: 0,
      col: 0,
      dir: 0,
    };

    const patrolled = new Set<string>();

    for (let row = 0; row < mappedArea.length; row++) {
      for (let col = 0; col < mappedArea[row].length; col++) {
        if (mappedArea[row][col] === "^") {
          guard.row = row;
          guard.col = col;
        }
      }
    }

    while (true) {
      patrolled.add(`${guard.row}-${guard.col}`);

      const [dRow, dCol] = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ][guard.dir];
      const nextCol = guard.col + dCol;
      const nextRow = guard.row + dRow;

      if (
        0 <= nextRow &&
        nextRow < mappedArea.length &&
        0 <= nextCol &&
        nextCol < mappedArea[0].length
      ) {
        break;
      }

      if (mappedArea[nextRow][nextCol] === "#") {
        guard.dir = (guard.dir + 1) % 4;
      } else {
        guard.row = nextRow;
        guard.col = nextCol;
      }
    }

    return patrolled.size;
  }

  console.log("Problem 1: ", problem1(mappedArea));

  function problem2(mappedArea: string[][]): number {
    const guard: Guard = {
      position: [0, 0],
      direction: [0, -1],
    };

    const patrolledArea = mappedArea.map(row => row.slice());

    for (let y = 0; y < mappedArea.length; y++) {
      for (let x = 0; x < mappedArea[y].length; x++) {
        if (mappedArea[y][x] === "^") {
          guard.position = [x, y];
        }
      }
    }

    let obstaclesPlaced = 0;

    while (!isOutOfBounds(guard.position, mappedArea)) {
      const [currPosX, currPosY] = guard.position;

      patrolledArea[currPosY][currPosX] = "X";

      let nextPosition = move(guard.position, guard.direction);
      if (isOutOfBounds(nextPosition, patrolledArea)) break;

      if (checkCollision(nextPosition, patrolledArea)) {
        guard.direction = rotate90(guard.direction);
        nextPosition = move(guard.position, guard.direction);
      }

      guard.position = nextPosition;
    }

    return obstaclesPlaced;
  }

  console.log("Problem 2: ", problem2(mappedArea));
}

main();
