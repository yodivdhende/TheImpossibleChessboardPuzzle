<script lang="ts">
  import Grid from "./lib/grid.svelte";
  import { getGrid, updateGrid } from "./services/gird-creator";
  import { getGuess, getIndicator } from "./services/solution";
  const side = 8;
  const maxGridId = Math.pow(2, Math.pow(side, 2));
  const notWorkingGridId = getIdOfGridNotWorking();

  function getIdOfGridNotWorking(): number | null {
    for (let id = 0; id < maxGridId; id++) {
      const grid = getGrid(id, side);
      for (let keyY = 0; keyY < side; keyY++) {
        for (let keyX = 0; keyX < side; keyX++) {
          const indicator = getIndicator(grid, { x: keyX, y: keyY });
          const newGrid = updateGrid(grid, indicator);
          const guess = getGuess(newGrid);
          if (guess.x !== keyX || guess.y !== keyY) {
            return id;
          }
        }
      }
    }
    return null;
  }
</script>

<main>
  {#if notWorkingGridId === null}
    <p>You found the solution</p>
  {:else}
    <Grid id={notWorkingGridId} {side} />
  {/if}
</main>

<style>
</style>
