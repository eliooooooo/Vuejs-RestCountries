<template>
  <main>
    <nav>
      <router-link to="/">Home</router-link>
      <!-- Route nommée -->
      <router-link :to="{name: 'test'}">About</router-link>
      <!-- Url avec variable -->
      <router-link :to="`/count/${number}`">Counter (10)</router-link>
      <router-link to="/boucles">Boucles</router-link>
      <router-link to="/boucles-exos">Boucles exos</router-link>
      <router-link to="/pays">Pays</router-link>
    </nav>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      number: 10
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
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
}
</style>
