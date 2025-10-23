<script setup>
import MyButton from "./components/MyButton.vue";
import IconComponent from "./assets/icon/icons-location.vue";
import Stat from "./components/Stat.vue";
</script>

<template>
    <main class="main">
        <Stat label="Влажность" stat="0%" />
        <Stat label="Осадки" stat="0%" />
        <MyButton>
            <IconComponent></IconComponent>
            Сохранить
        </MyButton>
    </main>
</template>

<style scoped>
.main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
}
</style>
