<template>
  <div>
    <div
      class="title-card vertical-center scroll-anim"
      :class="lockPos ? 'title-lock' : ''"
    >
      <TransitionGroup>
        <p key="welcome" class="interactive-text first">
          <span v-if="!personName" :class="showMyName ? '' : 'highlight1'">
            Hi!
          </span>
          <span v-if="personName">Hi</span>
          <span v-if="personName" :class="showMyName ? '' : 'highlight1'"
            >{{ personName ? " " + personName : "" }}! </span
          >I'm
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

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const personName = ref(getParameterByName("to"));

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

.v-leave-active {
  position: absolute;
  margin: 0;
  top: 85%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80vw;
}

.interactive-text {
  font-size: 200%;
  transition: all 0.4s;
}

.vertical-center {
  animation: fadeIn 1.2s;
  margin-left: 10px;
  position: fixed;
  top: 50lvh;
  left: 50vw;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80vw;
}
.title-lock {
  margin-top: 600px !important;
  position: absolute !important;
  left: 50vw;
}

.scroll-anim {
  z-index: 101;
  animation: fadeIn 1.2s;
}

.highlight1,
.highlight2 {
  transition: color 0.2s;
  color: var(--secondary);
}

.highlight1:hover,
.highlight2:hover {
  transition: color 0.2s;
  color: var(--text-col);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 610px) {
  .scroll-anim {
    background-color: rgba(var(--background-rbg), 0.8);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: 1px 2px 3px rgba(var(--background-rbg), 1);
  }
}
</style>
