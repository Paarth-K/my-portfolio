<template>
  <footer id="footer">
    <div class="footergrid">
      <div class="footergriditem">
        <p class="footertitle">Let's get in touch</p>
        <div>
          <p><a class="contact" href="tel:+6591772057">+65 91772057</a></p>
          <p>
            <a class="contact" href="mailto: paarth@paarthkukreja.com"
              >paarth@paarthkukreja.com</a
            >
          </p>
        </div>
      </div>
      <div class="footergriditem">
        <p class="footertitle">Here's a PDF</p>
        <div>
          <nav-link class="navlink" to="/pdf"> View PDF Resume</nav-link>
        </div>
      </div>
      <div class="footergriditem">
        <p class="footertitle">My Socials</p>
        <div>
          <a href="https://github.com/Paarth-K">
            <IconGithub style="color: #171515" class="socialicon"></IconGithub
          ></a>
          <a href="https://www.instagram.com/paarth.kukreja/">
            <IconInstagram
              style="color: var(--text-col)"
              class="socialicon"
            ></IconInstagram>
          </a>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <a class="src" href="https://github.com/Paarth-K/my-portfolio">
        <span>View the source code for this site</span>
      </a>
    </div>
  </footer>
</template>
<script setup>
import NavLink from "../Nav/Link.vue";
import { IconGithub, IconInstagram } from "@iconify-prerendered/vue-mdi";
</script>

<style scoped lang="scss">
.copyrights {
  display: block !important;
  padding: 10px !important;
  text-align: center;
  height: 20px;
  place-items: center;
}
.footergrid {
  margin: 0px 12.5vw;
  padding-bottom: 100px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
}
.socialicon {
  display: inline-block;
  width: auto;
  height: 40px;
  margin: 10px;
  transition: scale 0.2s ease;
}
.footertitle {
  font-weight: 500;
  font-size: 25px;
}
.socialicon:hover {
  transition: scale 0.2s ease;
  scale: 1.07;
}
.socialicon:active {
  transition: scale 0.2s ease;
  scale: 0.97;
}
@media (max-width: 830px) {
  .footergrid {
    grid-template-columns: 75vw;
    grid-template-rows: auto auto auto;
    row-gap: 50px;
  }
}
.navlink {
  display: block;
  height: auto;
}

.footergriditem {
  display: inline-grid;
  text-align: center;
}

.contact {
  text-decoration: none;
  color: var(--text-col);
}
.src {
  color: grey;
  text-decoration: none !important;
}
</style>
