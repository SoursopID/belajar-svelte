<script>
  import NavLink from "./NavLink.svelte";

  let count = $state([]);
  // let total = $derived(count.reduce((a, b) => a + b, 0));
  let total = $derived.by(() => {
    let total = 0;
    for (let i = 0; i < count.length; i++) {
      total += count[i];
    }
    return total;
  });

  const increment = () => {
    count.push(1);
  };

  $inspect(count).with((type, values) => {
    console.log(type, values);
  });
</script>

<button onclick={increment}>Count</button>
<h1>{count.join(" + ")} = {total}</h1>
