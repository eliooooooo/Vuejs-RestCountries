<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
    image: Boolean,
    data: Object
})

const image = ref(props.image)
const checked = ref(false)

watch(() => props.image, (newValue, oldValue) => {
    image.value = newValue;
});
</script>

<template>
    <a :href="`/pays/${data.name.common}`">
        <img v-if="image":src="data.flags.svg"/>
        <div class="row">
            <!-- <input type="checkbox" v-model="checked" @change="$emit('checkedEvent', checked)"> -->
            <h1>{{ data.name.common }}</h1> 
        </div>
    </a>    
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.row {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
}

img{
    width: 200px;
    max-height: 120px;
}

h1 {
    text-align: center;
}
</style>