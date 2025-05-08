<script>
  let count = $state(0);

  const increment = () => {
    count++;
  };
</script>

<button onclick={increment}>Count</button>
<h1>count state is {count}</h1>
