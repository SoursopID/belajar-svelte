<script>
  import { counter } from "../state/counter.svelte";

  function increment() {
    counter.count++;
  }
</script>

<button onclick={increment}>Inc {counter.count}</button>
