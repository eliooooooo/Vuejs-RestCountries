<script setup>
import { onMounted, ref } from 'vue'
import CardPays from '../components/CardPays.vue'

let data = ref('');

onMounted(async () => {
    data.value = await fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            return data
        })
});
</script>

<template>
    <div v-for="pays in data" :pays="pays">
        <CardPays :data="pays"/>
    </div>
</template>