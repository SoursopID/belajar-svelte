<script>
  import Logo from "./Logo.svelte";
  import NavLink from "./NavLink.svelte";

  console.log("Hello Svelte!");

  const name = "Svelte";

  const content = "<strong>Isinya</strong>";
</script>

<NavLink />
<h1>Hello {name.toUpperCase()}!</h1>
<Logo />
<Logo />

<p>{content}</p>
<p>{@html content}</p>

<style>
  h1 {
    color: skyblue;
  }
</style>
