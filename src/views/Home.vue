<template>
    <div>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Découvrez les informations sur tous les pays du monde</h1>
                <p>Une application moderne pour explorer les données des pays avec facilité.</p>
                <router-link to="/pays" class="cta-button">Commencez maintenant</router-link>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="container">
                <h2 class="green">Fonctionnalités</h2>
                <div class="feature-list">
                    <div class="feature-item">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                            </svg>
                        </div>
                        <h3>Informations Complètes</h3>
                        <p>Accédez à des données détaillées sur chaque pays.</p>
                    </div>
                    <div class="feature-item">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                        <h3>Recherche Facile</h3>
                        <p>Trouvez rapidement les informations dont vous avez besoin.</p>
                    </div>
                    <div class="feature-item">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                            </svg>
                        </div>
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
                        <img src="../assets/image/user-1.jpg" alt="User 1">
                        <blockquote>"Une application incroyable pour découvrir le monde!"</blockquote>
                        <p class="white">- Utilisateur 1</p>
                    </div>
                    <div class="testimonial-item">
                        <img src="../assets/image/user-2.jpg" alt="User 2">
                        <blockquote>"Très utile et facile à utiliser."</blockquote>
                        <p class="white">- Utilisateur 2</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.green {
    color: #6E9F6E;
}

.white {
    color: white;
}

h2 {
    font-size: xx-large;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
}

h3 {
    color: white;
    font-weight: bold;
}

.icon {
    background-color: #6E9F6E;
    padding: 1rem;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 200px;
}

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
    background-color: #181818;
    color: #fff;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    display: inline-block;
}

.cta-button:hover {
    background-color: #6E9F6E;
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

@media (max-width: 500px) {
    .features .feature-list {
        flex-direction: column;
    }
}

.features .feature-item {
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.features .feature-item i {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.testimonials {
    background-color: rgb(43, 43, 42);
    padding: 4rem 0;
    text-align: center;
}

.testimonials .testimonial-list {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}

@media (max-width: 460px) {
    .testimonials .testimonial-list {
        flex-direction: column;
    }
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
</style>