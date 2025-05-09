<script>
  import NavLink from "./NavLink.svelte";

  let person = $state.raw({
    firstName: "",
    lastName: "",
  });

  function sayHello() {
    person = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
    };
  }
</script>

<NavLink />
<div>
  <input type="text" id="firstName" placeholder="First Name" value="" />
  <input type="text" id="lastName" placeholder="Last Name" value="" />
  <button onclick={sayHello}>Say Hello</button>

  <h1>Hello, {person.firstName} {person.lastName}!</h1>
</div>
