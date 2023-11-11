<template>
  <div>
    <transition>
      <div class="ScrollAnim" v-if="showScroll">
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
        <span id="scroll-text" class="mouse-scroll">
          there's more stuff below!
        </span>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const showScroll = ref(false);
const scrollCutoff = 250;
function checkPos() {
  if (window.scrollY > scrollCutoff) {
    showScroll.value = false;
  } else {
    showScroll.value = true;
  }
}
onMounted(() => {
  checkPos();
});
addEventListener("scroll", (event) => {
  checkPos();
});
</script>

<style scoped>
#scroll-text,
.ScrollAnim {
  z-index: -10000 !important;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
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
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  z-index: 9999;
}
#scroll-text {
  bottom: 55px;
  width: 99vw;
  text-align: center;
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
  height: calc(4vh - 2px);
  width: 4vw;
  padding: 1px;
  padding-top: 3px;
  border-radius: 5px;
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
  animation: mouse-scroll 1s infinite;
  -webkit-animation: mouse-scroll 1s infinite;
  -moz-animation: mouse-scroll 1s infinite;
  margin-right: auto;
  margin-left: auto;
}
#mouse-scroll .down-arrow-1 {
  animation-delay: 0.1s;
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-2 {
  animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-3 {
  animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
}

#mouse-scroll .mouse-in {
  height: 4px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: #000000;
  position: relative;
}
#mouse-scroll .mouse-in {
  animation: animated-mouse 1.2s ease alternate-reverse infinite;
  -webkit-animation: animated-mouse 1.2s ease alternate-reverse infinite;
  -moz-animation: animated-mouse 1.2s ease alternate-reverse infinite;
}

@keyframes animated-mouse {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2vh);
    -ms-transform: translateY(2vh);
    transform: translateY(2vh);
  }
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
    -webkit-transform: translateY(2vh);
    -ms-transform: translateY(2vh);
    transform: translateY(2vh);
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
