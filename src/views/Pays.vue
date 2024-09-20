<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardPays from '../components/CardPays.vue'
import ViewPays from '../components/ViewPays.vue'

let all = true;

const route = useRoute();
let pays = ref(route.params.pays);

let data = ref('');
let recherche = ref('');
let image = ref(true);
let nbChecked = ref(0);

const fetchData = async () => {
    if (pays.value) {
        all = false;
        data.value = await fetch(`https://restcountries.com/v3.1/name/${pays.value}`)
            .then(response => response.json())
            .then(data => {
                return data
            })
    } else {
        all = true;
        data.value = await fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                return data
            })
    }
};

onMounted(fetchData);

watch(() => route.params.pays, (newPays) => {
    pays.value = newPays;
    fetchData();
});


const filtrer = async (recherche) => {
    if (recherche.length > 0) {
        all = true;
        data.value = await fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                let tmp = [];
                data.forEach(element => {
                    if (element.name.common.toLowerCase().startsWith(recherche.toLowerCase())) {
                        tmp.push(element);
                    }
                });
                return tmp;
            })
    } else {
        fetchData();
    }
}

const updateChecked = (checked) => {
    if (checked) {
        nbChecked.value++
    } else {
        nbChecked.value--
    }
}
</script>

<template>
    <div class="bg-style">
        <div class="container">
            <div class="header">
                <h1 class="white">Recherche des pays</h1>
                <p>Le contenu affiché sur le site provient de l'API <a href="https://restcountries.com/">Rest
                        Countries</a></p>
            </div>
            <!-- <p><span>{{ nbChecked }}</span> pays sélectionnés</p> -->
            <div class="align-search">
                <div v-if="all" class="row">
                    <label for="flag">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-flag-fill" viewBox="0 0 16 16">
                            <path
                                d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                        </svg>
                        <input type="checkbox" id="flag" v-model="image">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div v-else>
                    <router-link to="/pays" title="Retour à tous les pays">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-grid-fill" viewBox="0 0 16 16">
                            <path
                                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                        </svg>
                    </router-link>
                </div>
                <div class="col">
                    <input class="search" v-model="recherche" placeholder="Rechercher un pays"
                        @input="filtrer(recherche)">
                    <p class="small">La recherche des différents pays se fait en anglais. </p>
                </div>
            </div>
        </div>
    </div>

    <div v-if="all" class="container-cards container">
        <CardPays class="cardpays" v-for="pays in data" @checkedEvent="updateChecked" :data="pays" :image="image" />
    </div>
    <div v-else class="container container-card">
        <ViewPays :data="data[0]" />
    </div>
</template>

<style scoped>
input[type="checkbox"] {
    display: none;
}

.checkmark {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #ccc;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}

input[type="checkbox"]:checked+.checkmark {
    background-color: #4caf50;
    /* Couleur verte */
}

.checkmark::after {
    content: "";
    position: absolute;
    display: none;
}

input[type="checkbox"]:checked+.checkmark::after {
    display: block;
}

.checkmark::after {
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.white {
    color: white;
}

.align-search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    gap: 2rem;
    background-color: #181818;
    padding: 1.5rem;
    border-radius: 6px;
    transform: translateY(50px);
    box-shadow: 0px 5px 10px #6d9d6d3d;
    max-width: 50%;
    width: 100%;
}

@media (max-width: 800px) {
    .align-search {
        max-width: 90%;
    }
}

.align-search .col {
    width: 100%;
}

.small {
    font-size: 12px;
}

.row label {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: end;
}

.col {
    flex-direction: column;
}

.container-card {
    margin-top: 5rem;
}

.container-cards {
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.cardpays {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
}

.search {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.13);
    color: white;
}

.bg-style {
    background: rgb(24, 24, 24);
    background: radial-gradient(circle, rgba(24, 24, 24, 1) 7%, rgba(111, 161, 111, 1) 39%, rgba(24, 24, 24, 1) 94%);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.bg-style .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.header {
    margin-top: 2rem;
    font-size: x-large;
    margin-bottom: 1rem;
}
</style>