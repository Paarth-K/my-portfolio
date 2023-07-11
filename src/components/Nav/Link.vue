<template>
  <a :href="to">
    <div class="nav-link-container">
      <button>
        <slot />
      </button>
    </div>
  </a>
</template>

<script>
export default {
  props: ["to"],
};
</script>

<style scoped>
.nav-link-container {
  display: inline-block;
  height: 100%;
  list-style-type: none;
  text-align: center;

  border-radius: 30px;
  border: 1px solid;
  transition: border 0.1s;
}
.nav-link-container:hover {
  transition: border 0.1s;
  border: 1px var(--primary) dashed;
}
@media (max-width: 385px) {
  .nav-link-container {
    transform: scale(0.9);
    margin-left: 5px;
  }
}

.nav-link-container:hover button {
  background-color: var(--background);
}
button {
  /* filter: invert(); */
  display: inline-block;
  padding: 14px;
  padding-top: 15px !important;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: none;
  text-transform: uppercase;
  transition: background-color 0.25s, border 0.25s;
  /* transition: all 0.25s; */
  background-color: var(--accent);
  pointer-events: none;
}
</style>
