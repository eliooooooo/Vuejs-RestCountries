<template>
    <div>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Découvrez les informations sur tous les pays du monde</h1>
                <p>Une application moderne pour explorer les données des pays avec facilité.</p>
                <RouterLink to="/pays" class="cta-button">Commencez maintenant</RouterLink>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="container">
                <h2>Fonctionnalités</h2>
                <div class="feature-list">
                    <div class="feature-item">
                        <i class="icon-globe"></i>
                        <h3>Informations Complètes</h3>
                        <p>Accédez à des données détaillées sur chaque pays.</p>
                    </div>
                    <div class="feature-item">
                        <i class="icon-search"></i>
                        <h3>Recherche Facile</h3>
                        <p>Trouvez rapidement les informations dont vous avez besoin.</p>
                    </div>
                    <div class="feature-item">
                        <i class="icon-map"></i>
                        <h3>Cartes Interactives</h3>
                        <p>Explorez les pays avec des cartes interactives.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials">
            <div class="container">
                <h2>Témoignages</h2>
                <div class="testimonial-list">
                    <div class="testimonial-item">
                        <img src="" alt="User 1">
                        <blockquote>"Une application incroyable pour découvrir le monde!"</blockquote>
                        <p>- Utilisateur 1</p>
                    </div>
                    <div class="testimonial-item">
                        <img src="" alt="User 2">
                        <blockquote>"Très utile et facile à utiliser."</blockquote>
                        <p>- Utilisateur 2</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
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
    </div>
</template>

<style scoped>
.hero {
    background: rgb(24,24,24);
    background: radial-gradient(circle, rgba(24,24,24,1) 7%, rgba(111,161,111,1) 39%, rgba(24,24,24,1) 94%);
    color: #fff;
    text-align: center;
    padding: 4rem 0;
}

.hero img {
    height: 150px;
    width: auto;
    align-self: self-end;
}

.hero .cta-button {
    background-color: #333;
    color: #fff;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    display: inline-block;
}

.features {
    padding: 4rem 0;
    text-align: center;
}

.features .feature-list {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}

.features .feature-item {
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.features .feature-item i {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.testimonials {
    padding: 4rem 0;
    text-align: center;
}

.testimonials .testimonial-list {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}

.testimonials .testimonial-item {
    max-width: 300px;
}

.testimonials .testimonial-item img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
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