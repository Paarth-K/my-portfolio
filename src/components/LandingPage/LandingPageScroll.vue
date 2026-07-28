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
          <span :class="showMyName ? 'highlight1' : ''"> Let's </span>
          get to know
          <span :class="showMyName ? 'highlight2' : ''">{{
            personName ? "each other" : "me"
          }}</span>
        </p>
      </TransitionGroup>
    </div>
    <ScrollPromptAnim></ScrollPromptAnim>
  </div>
</template>

<script setup>
import ScrollPromptAnim from "../Base/ScrollPromptAnim.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";

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

function checkPos() {
  showMyName.value = window.scrollY >= 250;
  lockPos.value = window.scrollY >= 600;
}

onMounted(() => {
  checkPos();
  window.addEventListener("scroll", checkPos, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkPos);
});
</script>

<style scoped lang="scss">
.title-card {
  text-align: center;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
}

/* Qualified with `.interactive-text`: an unqualified `.v-*` rule here also
   matches the root element of any child component, because scoped styles
   apply the parent's scope id to it. That is how this block used to fling
   the scroll hint to `top: 85%` as it left. */
.interactive-text.v-enter-active,
.interactive-text.v-leave-active {
  transition: opacity 0.5s ease;
}

.interactive-text.v-enter-from,
.interactive-text.v-leave-to {
  opacity: 0;
}

.interactive-text.v-leave-active {
  position: absolute;
  margin: 0;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
}

.interactive-text {
  font-size: var(--type-hero);
  line-height: 1.15;
  letter-spacing: -0.015em;
  text-wrap: balance;
  /* `all` is load-bearing: TransitionGroup's FLIP move animation rides this
     transition, and it is what carries the greeting upwards as the second
     line arrives. Narrowing it stops the line from gliding. */
  transition: all 0.4s;
}

.vertical-center {
  animation: fadeIn 1.2s;
  position: fixed;
  top: 50lvh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 80vw;
}

.title-lock {
  /* Matches the fixed position exactly at the 600px handover, so the title
     hands off from viewport-anchored to page-anchored without a jump. */
  margin-top: 600px;
  position: absolute;
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
    padding: 10px 6px;
    background-color: rgba(var(--background-rbg), 0.85);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 14px;
  }
}
</style>
