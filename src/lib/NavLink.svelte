<script>
  import pages from "../pages.js";
  const links = Object.keys(pages).map((key) => {
    return pages[key];
  });
</script>

<p>
  {#each links as page}
    <a href="/{page}" class="card"><button>{page}</button></a>
  {/each}
</p>
