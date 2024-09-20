<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pays">Pays</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
nav {
  background-color: transparent;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
