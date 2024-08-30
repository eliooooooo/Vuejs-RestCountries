<script setup>
defineProps({
    data: Object
})
</script>

<template>
    <a :href="data.name.common">
        <img :src="data.flags.svg"/>
        <h1>{{ data.name.common }}</h1>
    </a>    
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
}

img{
    width: 200px;
}
</style>