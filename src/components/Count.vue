<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// Récupération de la variable d'url
const number = route.params.number
</script>

<template>
    <div>
        <h1>La variable d'url est {{ number }}</h1>
    </div>
</template>
