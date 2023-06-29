<template>
  <div>
    <transition>
      <div v-if="showScroll">
        <div id="mouse-scroll">
          <div class="mouse">
            <div class="mouse-in"></div>
          </div>
          <div>
            <span class="down-arrow-1"></span>
            <span class="down-arrow-2"></span>
            <span class="down-arrow-3"></span>
          </div>
        </div>
        <span id="scroll-text" class="mouse-scroll"
          >there's more stuff below!</span
        >
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
onMounted(() => {
  if (window.scrollY > 20) {
    showScroll.value = false;
  } else {
    showScroll.value = true;
  }
});
const showScroll = ref(false);
addEventListener("scroll", (event) => {
  //   console.log(window.scrollY);
  if (window.scrollY > 20) {
    showScroll.value = false;
  } else {
    showScroll.value = true;
  }
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#mouse-scroll {
  display: block;
}
.mouse-scroll,
#mouse-scroll {
  position: fixed;
  margin: auto;
  left: 50%;
  bottom: 80px;
  -webkit-transform: translateX(-50%);
  z-index: 9999;
}
#scroll-text {
  bottom: 60px;
}
#mouse-scroll span {
  display: block;
  width: 5px;
  height: 5px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  transform: rotate(45deg);
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  margin: 0 0 3px 5px;
}
#mouse-scroll .mouse {
  height: 21px;
  width: 14px;
  border-radius: 10px;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  border: 2px solid #000000;
  top: 170px;
}
#mouse-scroll .down-arrow-1 {
  margin-top: 6px;
}
#mouse-scroll .down-arrow-1,
#mouse-scroll .down-arrow-2,
#mouse-scroll .down-arrow-3 {
  -webkit-animation: mouse-scroll 1s infinite;
  -moz-animation: mouse-scroll 1s infinite;
}
#mouse-scroll .down-arrow-1 {
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-2 {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-3 {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .mouse-in {
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: #000000;
  position: relative;
}
#mouse-scroll .mouse-in {
  -webkit-animation: animated-mouse 1.2s ease infinite;
  moz-animation: mouse-animated 1.2s ease infinite;
}

@-webkit-keyframes animated-mouse {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@-webkit-keyframes mouse-scroll {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
