<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  
<header>
  <NavBar />
</header>

<main>
  <RouterView />
</main>
  
  

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
}

main {
  padding-top: 20px;
}

@media (min-width: 1024px) {
  header1 {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
