<script>
  import Todo from "./Todo.svelte";

  const data = $state([
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
  ]);

  function todoRemove() {
    data.shift();
  }
</script>

<button onclick={todoRemove}>Remove</button>
<ul>
  {#each data as todo (todo.id)}
    <li><Todo {...todo} /></li>
  {/each}
</ul>
