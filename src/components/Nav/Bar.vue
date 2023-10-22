<template>
  <div class="container" :class="showBar ? 'extendedContainer' : ''">
    <div id="paarth-logo">
      <SiteLogo v-show="!showBar"></SiteLogo>
    </div>
    <div class="nav-links-container">
      <div class="nav-links-div" :class="showBar ? 'hidden' : 'visible'">
        <nav-link
          class="nav-links"
          v-for="data in navLinkData"
          :to="data.to"
          :key="data"
        >
          {{ data.display }}
        </nav-link>
      </div>
      <div
        v-on:click="showBar = !showBar"
        :class="!showBar ? 'floatright' : ''"
      >
        <svg
          v-if="!showBar"
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#0b181e"
            stroke-linecap="round"
            stroke-width="1.7"
            d="M20 7H4m16 5H4m16 5H4"
          />
        </svg>
        <svg
          v-else
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0b181e"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavLink from "./Link.vue";
import SiteLogo from "./SiteLogo.vue";
const navLinkData = ref([
  {
    to: "#about",
    display: "About Me",
  },
  {
    to: "#projects",
    display: "Projects",
  },
  {
    to: "#experience",
    display: "Experience",
  },
  {
    to: "#countries",
    display: "Countries",
  },
  {
    to: "#education",
    display: "Education",
  },
]);

const showBar = ref(false);
</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  /* background-color: #f7fdf9;
   */
  background-image: radial-gradient(
    rgba(0, 0, 0, 0) 1px,
    var(--background) 1px
  );
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  z-index: 9000;
  height: auto;
  text-align: right;
  padding: 7px;
  box-shadow: 0px 2px 20px var(--background);
}

.nav-links {
  margin-left: 17px;
}
.nav-links-div {
  display: inline-block;
  padding-bottom: 10px;
  transition: all 2s ease;
}
.arrow {
  /* position: absolute;
  right: 20px;
  top: 14px; */
  display: inline-block;
  /* padding-left: 20px; */
  margin-top: 0px !important;
}

.floatright {
  float: right;
  margin: 0px !important;
  padding-right: 20px;
  padding-top: 2px;
}
.hidden {
  display: none;
}
.arrow {
  display: none;
}
.extendedContainer {
  height: 100px !important;
}

@media (max-width: 735px) {
  .container {
    padding: 0px;
    padding-top: 7px !important;
    height: 55px;
  }
  #paarth-logo {
    position: absolute;
    left: 50vw;
    transform: translateX(-65.5px);
  }
  .arrow {
    display: inline-block;
  }
  .hidden {
    display: inline-block;
  }
  .visible {
    display: none;
  }
  .nav-links-container {
    display: none !important;

    width: 100%;
    position: absolute;
    /* padding-right: 25px; */
    text-align: center;
    margin: 0px;
    margin-top: 9px !important;
  }

  .nav-links {
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media (max-width: 410px) {
  .nav-links {
    margin-left: 5px;
    margin-right: 5px;
  }

  .nav-links-container {
    margin-right: 0px !important;
  }
}

@media (max-width: 384px) {
}
.nav-links-container {
  margin-right: 15px;
  margin-top: 3px;
}
#paarth-logo {
  padding: 10px;
  float: left;
  color: black;
  font-size: 25px;
}
@media (max-width: 420px) {
  .arrow {
    padding-left: 0px;
  }
}
</style>
