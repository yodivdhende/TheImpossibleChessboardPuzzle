export function getGrid(id: number, side: number): number[][] {
  const bits = [...id.toString(2)];
  const grid: number[][] = [];
  for (let y = 0; y < side; y++) {
    const row = [];
    for (let x = 0; x < side; x++) {
      const bit = bits[y * side + x] || 0;
      row.push(bit);
    }
    grid.push(row);
  }
  return grid;
}

export function updateGrid(original: number[][], indicator: { x: number, y: number }): number[][] {
  original[indicator.y][indicator.x] = (original[indicator.y][indicator.x] + 1) % 2;
  return original;
}
