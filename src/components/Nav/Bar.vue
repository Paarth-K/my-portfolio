<template>
  <div class="container">
    <div id="paarth-logo">Logo</div>
    <nav-link
      class="nav-links interactable"
      v-for="data in navLinkData"
      :to="data.to"
      :key="data"
    >
      {{ data.display }}
    </nav-link>
  </div>
</template>
<script setup>
import NavLink from "./Link.vue";
</script>
<script>
export default {
  data() {
    return {
      navLinkData: [
        {
          to: "#about",
          display: "About Me",
        },
        {
          to: "#projects",
          display: "Projects",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  position: fixed;
  width: 99vw;
  background-color: rgba(0, 0, 0, 0);
  height: auto;
  text-align: right;
  padding: 7px;
}

#paarth-logo {
  padding: 10px;
  float: left;
  color: black;
  font-size: 25px;
}
</style>
