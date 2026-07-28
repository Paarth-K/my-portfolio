<template>
  <!--
    Named, not the default `v-` transition. `<Transition>` is transparent, so
    `.ScrollAnim` is this component's root element and therefore also carries
    the *parent's* scope id — which meant LandingPageScroll's own
    `.v-leave-active { position: absolute; top: 85% }` matched it and yanked
    the hint up the page before it faded.
  -->
  <transition name="prompt">
    <div class="ScrollAnim" v-if="showScroll" aria-hidden="true">
      <div class="mouse">
        <div class="mouse-in"></div>
      </div>
      <div class="arrows">
        <span class="down-arrow-1"></span>
        <span class="down-arrow-2"></span>
        <span class="down-arrow-3"></span>
      </div>
      <span class="mouse-scroll-text">there's more stuff below!</span>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const showScroll = ref(false);
// Clears well before the greeting re-centres at 250, so the hint is gone
// by the time the second line arrives instead of colliding with it.
const scrollCutoff = 120;

function checkPos() {
  showScroll.value = window.scrollY <= scrollCutoff;
}

onMounted(() => {
  checkPos();
  window.addEventListener("scroll", checkPos, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkPos);
});
</script>

<style scoped>
.ScrollAnim {
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  /* Under the greeting, which sits at 101. */
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  /* Purely a hint — it must never intercept a click on what is underneath. */
  pointer-events: none;
  color: var(--text-col);
}

/* Fades out where it stands; no movement. */
.prompt-enter-active,
.prompt-leave-active {
  transition: opacity 0.25s ease;
}

.prompt-enter-from,
.prompt-leave-to {
  opacity: 0;
}

.mouse {
  /* Was 4vw x 4vh, which drew a squat rectangle on wide screens and a
     15px sliver on phones. */
  width: 22px;
  height: 34px;
  padding-top: 6px;
  border: 2px solid currentColor;
  border-radius: 11px;
}

.mouse-in {
  height: 5px;
  width: 2px;
  margin: 0 auto;
  border-radius: 1px;
  background: currentColor;
  animation: animated-mouse 1.2s ease alternate-reverse infinite;
}

.arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.arrows span {
  display: block;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  animation: mouse-scroll 1s infinite alternate;
}

.down-arrow-1 {
  animation-delay: 0.1s;
}

.down-arrow-2 {
  animation-delay: 0.2s;
}

.down-arrow-3 {
  animation-delay: 0.3s;
}

.mouse-scroll-text {
  margin-top: 4px;
  font-size: 0.95rem;
  color: var(--ink-muted);
  white-space: nowrap;
}

@keyframes animated-mouse {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

@keyframes mouse-scroll {
  0% {
    opacity: 0.35;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

/* Short windows cannot fit the hint clear of the greeting; drop it rather
   than let the two overlap. */
@media (max-height: 560px) {
  .ScrollAnim {
    display: none;
  }
}
</style>
