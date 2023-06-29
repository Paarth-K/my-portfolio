<template>
  <div>
    <div class="title-card vertical-center">
      <TransitionGroup>
        <p class="title">
          <span :class="showMyName ? '' : 'highlight1'"> Welcome </span>
          to my
          <span :class="showMyName ? '' : 'highlight2'">portfolio</span>
        </p>
        <p v-if="showMyName" class="my-name">
          <span :class="showMyName ? 'highlight1' : ''"> My name </span>
          is
          <span :class="showMyName ? 'highlight2' : ''">Paarth</span>
        </p>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showMyName = ref(false);
addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY >= 100) {
    showMyName.value = true;
  } else {
    showMyName.value = false;
  }
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

.title,
.my-name {
  font-family: "Inter", sans-serif;
  font-size: 200%;
  transition: all 0.5s;
}
.vertical-center {
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.highlight1,
.highlight2 {
  transition: color 0.2s;
  color: #3299cd;
}

.highlight1:hover,
.highlight2:hover {
  transition: color 0.2s;
  color: black;
}
</style>
