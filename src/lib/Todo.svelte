<script>
  const { id, name, done } = $props();
  const emojis = {
    "1": "😀",
    "2": "😁",
    "3": "😂",
    "4": "🤣",
  };

  const emoji = emojis[id];
  console.log(emoji);
</script>

{emoji}

{#if done}
  <strike>{id} - {name}</strike>
{:else}
  <span>{id} - {name}</span>
{/if}
