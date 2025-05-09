<script>
  let counter = $state(0);
  let interval = $state(1000);

  function increment() {
    interval += 1000;
  }

  $effect(() => {
    setInterval(() => {
      counter++;
    }, interval);
  });
</script>

<h1>Counter : {counter}</h1>

<button onclick={increment}>Increment interval : {interval}</button>
