<script setup>
import Stat from "./components/Stat.vue";
import SitySelect from "./components/SitySelect.vue";
</script>

<template>
    <main class="main">
        <Stat label="Влажность" stat="0%" />
        <Stat label="Осадки" stat="0%" />
        <SitySelect></SitySelect>
    </main>
</template>

<style scoped>
.main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
}
</style>
