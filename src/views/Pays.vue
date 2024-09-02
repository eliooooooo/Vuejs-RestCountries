<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardPays from '../components/CardPays.vue'
import ViewPays from '../components/ViewPays.vue'

let all = true;

const route = useRoute();
let pays = ref(route.params.pays);

let data = ref('');

const fetchData = async () => {
    if (pays.value) {
        all = false;
        data.value = await fetch(`https://restcountries.com/v3.1/name/${pays.value}`)
            .then(response => response.json())
            .then(data => {
                return data
        })
    } else {
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
</script>

<template>
    <div v-if="all" v-for="pays in data" :pays="pays">
        <CardPays :data="pays"/>
    </div>
    <div v-else>
        <ViewPays :data="data[0]"/>
    </div>
</template>