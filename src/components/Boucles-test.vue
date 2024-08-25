<script setup>
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
]
</script>

<template>
    <div>
        <h1>Boucles</h1>
        <h2>Exemple 1</h2>
        <ul>
        <li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
        </ul>
        <h2>Exemple 2</h2>
        <ul>
        <li v-for="(item, index) in items" :key="index">{{ index }} - {{ item.name }}</li>
        </ul>
    </div>
</template>