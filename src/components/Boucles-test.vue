<template>
    <div>
        <h1>Boucles</h1>
        <h2>Exemple 1</h2>
        <ul>
        <li v-if="show" v-for="(item, index) in items" :key="index">{{ item.name }}</li>
        <li v-else>Changer le mode d'affichage</li>
        </ul>

        <p v-show="show" >l'affichage est activé</p>

        <button @click="show = !show">Changer l'affichage</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' },
            ]
        }
    }
}
</script>

<style scoped>
  button {
    margin-top: 20px;
    cursor: pointer;
  }

  p{
    margin-top: 30px;
  }
</style>