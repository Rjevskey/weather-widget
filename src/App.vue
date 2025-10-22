<script setup>
import MyButton from "./components/MyButton.vue";
import Stat from "./components/Stat.vue";
</script>

<template>
    <main class="main">
        <Stat />
        <MyButton> Сохранить </MyButton>
    </main>
</template>

<style scoped>
.main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
}
</style>
