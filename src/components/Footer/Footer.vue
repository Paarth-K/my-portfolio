<template>
  <footer id="footer">
    <div class="footergriditem">
      <h2>Let's get in touch</h2>
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
      <h2>Here's a PDF</h2>
      <div>
        <nav-link class="navlink" to="/pdf"> View PDF Resume</nav-link>
      </div>
    </div>
  </footer>
</template>
<script setup>
import NavLink from "../Nav/Link.vue";
</script>

<style scoped lang="scss">
#footer {
  margin: 0px 20vw;
  padding-bottom: 100px;
  margin-top: 50px;
  display: grid;

  grid-template-columns: 30vw 30vw;
}
@media (max-width: 700px) {
  #footer {
    grid-template-columns: 60vw;
    grid-template-rows: auto auto;
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
</style>
