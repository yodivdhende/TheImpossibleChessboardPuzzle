<script lang="ts">
  import { getGrid } from "../services/gird-creator";
  export let id: number = 0;
  export let side: number = 4;

  const grid = getGrid(id, side);
</script>

<main style="--side:{side}">
  {#each grid as row}
    {#each row as bit}
      <div class="bit">
        {bit}
      </div>
    {/each}
  {/each}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(var(--side), 50px);
    grid-template-rows: repeat(var(--side), 50px);
  }
  .bit {
    outline: 1px solid black;
    text-align: center;
    font-size: 20px;
  }
</style>
