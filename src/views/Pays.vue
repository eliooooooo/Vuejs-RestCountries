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
    if(recherche.length > 0) {
        all = true;
        data.value = await fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                let tmp = [];
                data.forEach(element => {
                    if(element.name.common.toLowerCase().startsWith(recherche.toLowerCase())) {
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
    if(checked) {
        nbChecked.value++
    } else {
        nbChecked.value--
    }
}
</script>

<template>
    <div>
        <p><span>{{ nbChecked }}</span> pays sélectionnés</p>
        <div class="row">
            <label>Afficher les drapeaux</label>
            <input type="checkbox" v-model="image">
        </div>
        <input v-model="recherche" placeholder="Rechercher un pays" @input="filtrer(recherche)">
    </div>

    <div v-if="all" v-for="pays in data" :pays="pays">
        <CardPays @checkedEvent="updateChecked" :data="pays" :image="image"/>
    </div>
    <div v-else>
        <ViewPays :data="data[0]"/>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .row {
        flex-direction: row;
    }
</style>