<script setup>
import { ref } from 'vue';

const name = ref()
const deathAge = ref()

async function getDeathAge() {
    const userName = name.value

    const result = await fetch(`https://api.agify.io/?name=${userName}`)

    if (!result.ok || result.status !== 200) return

    const resultAge = await result.json()
    deathAge.value = resultAge.age
}

</script>

<template>
    <h1>Age death calculator</h1>

    <div>

        <label>
            <p>Name</p>
            <input type="text" v-model="name" @keydown.enter="getDeathAge">
        </label>
        
        <button @click="getDeathAge">Calculate</button>
    </div>


    <div>
        Death: {{ deathAge }}
    </div>
</template>


<style scoped>

</style>