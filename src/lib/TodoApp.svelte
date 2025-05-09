<script>
  import Todo from "./Todo.svelte";

  const data = [
    {
      id: 1,
      name: "Yapping",
      done: true,
    },
    {
      id: 2,
      name: "Ngoding",
      done: false,
    },
    {
      id: 3,
      name: "Belajar Svelte",
      done: true,
    },
    {
      id: 4,
      name: "Belajar aja",
    },
  ];
</script>

<ul>
  {#each data as todo}
    <li><Todo {...todo} /></li>
  {/each}
</ul>
