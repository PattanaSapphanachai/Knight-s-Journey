function getMinMove(
  start: string,
  target: string,
  brokenTiles: string[]
): number {
  let ans = 0;
  // write your algorithm here
  const col: string = "abcdefgh";
  const moves: number[][] = [
    [-1, 2],
    [1, 2],
    [-2, 1],
    [2, 1],
    [-2, -1],
    [2, -1],
    [-1, -2],
    [1, -2],
  ]; //[x, y]
  const brokenTilesSet = new Set(brokenTiles);

  const checkValidPos = (x: number, y: number) => {
    return (
      x >= 0 &&
      x <= 7 &&
      y >= 0 &&
      y <= 7 &&
      !brokenTilesSet.has(col[x] + (y + 1)) &&
      !visited[x][y]
    );
  };

  const startX = col.indexOf(start[0]);
  const startY = parseInt(start[1]) - 1;

  const targetX = col.indexOf(target[0]);
  const targetY = parseInt(target[1]) - 1;

  const queue = [[startX, startY, 0]]; // [x, y, step]
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));

  while (queue.length !== 0) {
    const [x, y, steps] = queue.shift()!;
    if (x === targetX && y === targetY) {
      ans = steps;
    }

    moves.map((move) => {
      const nextX = x + move[0];
      const nextY = y + move[1];
      if (checkValidPos(nextX, nextY)) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, steps + 1]);
      }
    });
    for (const [moveX, moveY] of moves) {
    }
  }

  return ans;
}
