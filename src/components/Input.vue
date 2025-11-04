<script setup>
const data = defineModel({ type: String, required: true });
</script>

<template>
    <input v-model="data" class="input" />
</template>

<style scoped>
.input {
    width: 260px;
    height: 53px;
    padding: 15px 20px;

    color: var(--color-primary);
    background: var(--color-bg-card);

    border: none;
    border-radius: 10px;
    box-shadow: 1px 2px 4px 0px var(--color-bg-main);

    font-size: 18px;
}
.input::placeholder {
    color: var(--color-text-placeholder);
}
</style>
