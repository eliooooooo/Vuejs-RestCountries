<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// Récupération de la variable d'url
const number = Number(route.params.number)
const int = Number.isInteger(number)
</script>

<template>
    <div>
        <h1 v-if="int">La variable d'url est {{ number }}</h1>
        <h1 v-else>La variable n'est pas un entier</h1>
    </div>
</template>
