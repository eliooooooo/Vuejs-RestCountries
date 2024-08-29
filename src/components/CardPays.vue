<script setup>
defineProps({
    data: Object
})
</script>

<template>
    <div>
        <img :src="data.flags.svg"/>
        <h1>{{ data.name.common }}</h1>
    </div>    
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

img{
    width: 200px;
}
</style>