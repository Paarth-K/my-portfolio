<template>
  <a
    onclick="dataLayer.push({ event: 'nav_link_click', 'nav_link_click': this.to })"
    :target="target"
    :href="to"
  >
    <div class="nav-link-container">
      <div class="nav-link">
        <slot />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: { to: "", target: "_self" },
};
</script>

<style scoped>
.nav-link-container {
  display: inline-block;
  height: 100%;
  list-style-type: none;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid #1e1d1d;
  box-shadow: 0px 0px 0px #1e1d1d;
  transition:
    box-shadow 0.1s,
    transform 0.1s;
}
.nav-link-container:hover {
  box-shadow: 4px 4px 0px #1e1d1d;
  transform: translate(-2px, -2px);
}

.nav-link-container:active {
  transition:
    box-shadow 0.05s,
    transform 0.05s;
  box-shadow: 0px 0px 0px #1e1d1d;
  transform: translate(0px, 0px);
}
@media (max-width: 385px) {
  .nav-link-container {
    margin-left: 5px;
  }
}

.nav-link-container:hover .nav-link {
  background-color: var(--background);
}
.nav-link {
  /* filter: invert(); */
  display: inline-block;
  padding: 14px;
  padding-top: 15px !important;
  cursor: pointer;
  font-size: 10pt;
  border-radius: 30px;
  border: none;
  text-transform: uppercase;
  transition:
    background-color 0.25s,
    border 0.25s;
  /* transition: all 0.25s; */
  background-color: var(--accent);
  pointer-events: none;
}
</style>
