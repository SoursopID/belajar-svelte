<script>
  let count = $state([]);
  let total = $derived(count.reduce((a, b) => a + b, 0));

  const increment = () => {
    count.push(1);
  };
</script>

<button onclick={increment}>Count</button>
<h1>{count.join(" + ")} = {total}</h1>
