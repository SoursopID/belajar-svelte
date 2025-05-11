<script>
  const { id, name, onedit } = $props();

  function save() {
    const input = document.getElementById(id);
    onedit(id, input.value);
  }

  function onEnter(e) {
    if (e.keyCode === 13) {
      save();
    }
  }
</script>

{id} <input type="text" {id} value={name} onkeypress={onEnter} />
<button onclick={save}>Save</button>
