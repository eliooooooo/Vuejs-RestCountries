<script setup>
defineProps({
    data: Object
})
</script>

<template>
    <div class="container">
        <img :src="data.flags.svg"/>
        <div>
            <h1>{{ data.name.common }}</h1>
            <p>Capital : {{ String(data.capital) }}</p>
            <p>Region : {{ data.region }}</p>
            <p>Sub-region : {{ data.subregion }}</p>
            <p>Area : {{ data.area }}</p>
            <p class="light">Population : {{ data.population }}</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
    }

    .container img {
        width: 200px;
    }

    .light {
        margin-top: 20px;
        color: gray;
    }
</style>