<template>
    <div>
        <table>
            <thead>
                <th>Note</th>
                <th>Valid ?</th>
            </thead>
            <tbody>
                <tr v-for="element in notes">
                    <td>{{ element }}</td>
                    <td class="color" :class="element >= 10 ? 'valid' : '' "></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            notes : []
        }
    },
    methods : {
        generateRandomNotes() {
            this.notes = Array.from({ length:10 }, () => Math.floor(Math.random() * 21));
        }
    },
    created() {
        this.generateRandomNotes();
    }
}
</script>

<style scoped>
    td {
        text-align: center;
    }

    .color {
        background-color: red;
    }

    .valid {
        background-color: green;
    }

    th {
        width: 100px;
    }
</style>