<template>
  <div>
    <div
      class="title-card vertical-center"
      :class="lockPos ? 'title-lock' : ''"
    >
      <TransitionGroup>
        <p key="welcome" class="interactive-text">
          Hi!
          <span :class="showMyName ? '' : 'highlight1'"> My name </span>
          is
          <span :class="showMyName ? '' : 'highlight2'">Paarth</span>
        </p>
        <p key="name" v-if="showMyName" class="interactive-text">
          <span :class="showMyName ? 'highlight1' : ''"> Welcome </span>
          to my
          <span :class="showMyName ? 'highlight2' : ''">Portfolio</span>
        </p>
      </TransitionGroup>
    </div>
    <ScrollPromptAnim></ScrollPromptAnim>
  </div>
</template>

<script setup>
import ScrollPromptAnim from "../Base/ScrollPromptAnim.vue";
import { onMounted, ref } from "vue";
const showMyName = ref(false);
const lockPos = ref(false);
console.log(
  `

  _   _      _ _       _ 
 | | | | ___| | | ___ | |
 | |_| |/ _ \\ | |/ _ \\| |
 |  _  |  __/ | | (_) |_|
 |_| |_|\\___|_|_|\\___/(_)
                         

`
);
onMounted(() => {
  checkPos();
});
function checkPos() {
  console.log(window.scrollY);
  if (window.scrollY >= 250) {
    showMyName.value = true;
  } else {
    showMyName.value = false;
  }
  if (window.scrollY >= 600) {
    lockPos.value = true;
  } else {
    lockPos.value = false;
  }
}
addEventListener("scroll", () => {
  checkPos();
});
</script>

<style scoped lang="scss">
.title-card {
  width: 50vw;
  text-align: center;
  cursor: default;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.interactive-text {
  // font-family: "Inter", sans-serif !important;
  font-weight: 400;
  font-size: 200%;
  transition: all 0.4s;
}

.vertical-center {
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80vw;
}
.title-lock {
  margin-top: 600px !important;
  position: absolute !important;
}

.highlight1,
.highlight2 {
  transition: color 0.2s;
  color: var(--secondary);
}

.highlight1:hover,
.highlight2:hover {
  transition: color 0.2s;
  color: #0b181e;
}
</style>
