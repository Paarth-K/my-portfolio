<template>
  <footer id="footer">
    <div>
      <h2>Good ol' Resume</h2>
      <nav-link to="/pdf"> Open PDF Resume</nav-link>
    </div>
  </footer>
</template>
<script setup>
import NavLink from "../Nav/Link.vue";
</script>

<style scoped lang="scss">
#footer {
  margin: 0px 10vw;
  padding-bottom: 100px;
  margin-top: 50px;
}
</style>
