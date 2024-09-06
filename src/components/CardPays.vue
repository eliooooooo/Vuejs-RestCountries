<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
    image: Boolean,
    data: Object
})

const image = ref(props.image)

watch(() => props.image, (newValue, oldValue) => {
    image.value = newValue;
});
</script>

<template>
    <a :href="`/pays/${data.name.common}`">
        <img v-if="image":src="data.flags.svg"/>
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