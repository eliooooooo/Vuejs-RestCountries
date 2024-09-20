<template>
  <header>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/pays">Pays</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Rest Countries App.</p>
      <ul class="footer-links">
        <li><a href="#">Politique de confidentialité</a></li>
        <li><a href="#">Conditions d'utilisation</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </footer>
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

.footer {
  color: #fff;
  text-align: center;
  padding: 2rem 0;
}

.footer .footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0 0;
}

.footer .footer-links a {
  color: #fff;
  text-decoration: none;
}
</style>
