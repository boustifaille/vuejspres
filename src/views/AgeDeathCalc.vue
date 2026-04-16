<script setup>
import { ref } from 'vue';

const name = ref()
const deathAge = ref()

async function getDeathAge() {
    const userName = name.value

    //const result = await fetch(`https://api.agify.io/?name=${userName}&country_id=ch`)

    deathAge.value = 82
    return
    if (!result.ok || result.status !== 200) return

    const resultAge = await result.json()
    deathAge.value = resultAge.age
}

</script>

<template>
    <div class="age-death-calc">
        <h1>Age of life calculator</h1>

        <div class="input-container">

            <label>
                <p>Name</p>
                <input type="text" v-model="name" @keydown.enter="getDeathAge">
            </label>
            
            <button @click="getDeathAge">Calculate</button>
        </div>


        <p v-if="deathAge">
            End of life at: <strong>{{ deathAge }}</strong> years old
        </p>

    </div>
</template>


<style scoped>

.age-death-calc {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
}

.input-container label p {
    margin-bottom: 5px;
}

h1 {
    font-weight: bold;
    font-size: 1.5rem;
}
strong {
    font-weight: bold;
    color: var(--second-color);
}
</style>