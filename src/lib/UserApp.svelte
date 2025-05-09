<script>
  import UserRow from "./UserRow.svelte";
</script>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <UserRow id="1" name="SoursopID" address="Moon" />
    <UserRow id="2" name="SoursopID 2" address="Moon 2" />
    <UserRow id="3" name="SoursopID 3" address="Moon 3" />
  </tbody>
</table>
