<template>
  <footer id="footer">
    <div class="footercenter">
      <div class="footergrid">
        <div class="footergriditem">
          <p class="footertitle">Let's get in touch</p>
          <div>
            <p>
              <a
                aria-label="paarth@paarthkukreja.com"
                class="contact"
                href="mailto:paarth@paarthkukreja.com"
                onclick="dataLayer.push({ event: 'footer_link_click', 'footer_link_click': 'email' })"
                >paarth@paarthkukreja.com</a
              >
            </p>
          </div>
        </div>
        <div class="footergriditem">
          <p class="footertitle">Want a PDF?</p>
          <div>
            <nav-link
              aria-label="View PDF Resume"
              target="_blank"
              class="navlink"
              to="/pdf"
              onclick="dataLayer.push({ event: 'footer_link_click', 'footer_link_click': 'pdf resume' })"
            >
              View PDF Résumé</nav-link
            >
          </div>
        </div>
        <div class="footergriditem">
          <p class="footertitle">My Socials</p>
          <div>
            <a
              aria-label="Link to Github Profile"
              target="_blank"
              href="https://github.com/Paarth-K"
              onclick="dataLayer.push({ event: 'footer_link_click', 'footer_link_click': 'github' })"
            >
              <IconGithub
                style="color: #171515"
                class="socialicon"
              ></IconGithub>
            </a>
            <a
              aria-label="Link to Instagram Profile"
              target="_blank"
              href="https://www.instagram.com/paarth.kukreja/"
              onclick="dataLayer.push({ event: 'footer_link_click', 'footer_link_click': 'instagram' })"
            >
              <IconInstagram
                style="color: var(--text-col)"
                class="socialicon"
              ></IconInstagram>
            </a>
            <a
              aria-label="Link to LinkedIn Profile"
              target="_blank"
              href="https://linkedin.com/in/paarth-kukreja/"
              onclick="dataLayer.push({ event: 'footer_link_click', 'footer_link_click': 'linkedin' })"
            >
              <IconLinkedin
                style="color: var(--text-col)"
                class="socialicon"
              ></IconLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <a
        aria-label="View the source code for this site"
        class="src"
        href="/source"
        target="_blank"
        onclick="dataLayer.push({ event: 'footer_link_click', 'footer_link_click': 'source code' })"
      >
        <span>View the source code for this site</span>
      </a>
    </div>
  </footer>
</template>
<script setup>
import NavLink from "../Nav/Link.vue";
import {
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "@iconify-prerendered/vue-mdi";
</script>

<style scoped lang="scss">
.copyrights {
  display: block !important;
  padding: 10px !important;
  text-align: center;
  height: 25px;
  place-items: center;
}
.footergrid {
  padding-bottom: 100px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
}
.footercenter {
  width: fit-content;
  margin: auto;
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
  font-size: 12pt;
  font-weight: 400;
}
</style>
