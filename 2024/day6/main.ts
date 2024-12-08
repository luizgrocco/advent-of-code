function main() {
  const input = Deno.readTextFileSync("input.txt");
  const mappedArea = input.split("\n").map((line) => line.split(""));

  function problem1(mappedArea: string[][]): number {
    type Vec2D = [number, number];
    type Guard = {
      position: Vec2D;
      direction: Vec2D;
    };

    const guard: Guard = {
      position: [0, 0],
      direction: [0, -1],
    };

    const rotate90 = ([x, y]: Vec2D): Vec2D => [-y, x];

    const move = ([posX, posY]: Vec2D, [dirX, dirY]: Vec2D): Vec2D => [
      posX + dirX,
      posY + dirY,
    ];

    const isOutOfBounds = ([x, y]: Vec2D, mappedArea: string[][]): boolean => {
      return (
        x < 0 || x >= mappedArea[0].length || y < 0 || y >= mappedArea.length
      );
    };

    const checkCollision = (
      [posX, posY]: Vec2D,
      mappedArea: string[][]
    ): boolean => mappedArea[posY][posX] === "#";

    for (let y = 0; y < mappedArea.length; y++) {
      for (let x = 0; x < mappedArea[y].length; x++) {
        if (mappedArea[y][x] === "^") {
          guard.position = [x, y];
        }
      }
    }

    while (!isOutOfBounds(guard.position, mappedArea)) {
      const [currPosX, currPosY] = guard.position;

      mappedArea[currPosY][currPosX] = "X";

      const nextPosition = move(guard.position, guard.direction);

      if (isOutOfBounds(nextPosition, mappedArea)) break;

      if (checkCollision(nextPosition, mappedArea)) {
        guard.direction = rotate90(guard.direction);
      } else {
        guard.position = nextPosition;
      }
    }

    return mappedArea.flat(Infinity).filter((block) => block === "X").length;
  }

  console.log("Problem 1: ", problem1(mappedArea));

  function problem2(mappedArea: string[][]) {}

  console.log("Problem 2: ", problem2(mappedArea));
}

main();
