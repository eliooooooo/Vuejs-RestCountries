<script setup>
defineProps({
    pays: String,
    capitale: String
})
</script>

<template>
    <div>
        <h1>{{ capitale }} est la capitale de {{ pays }}</h1>
    </div>    
</template>