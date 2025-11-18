<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
    emit("update:modelValue", event.target.value);
};
</script>

<template>
    <input
        class="input"
        :value="modelValue"
        @input="updateValue"
        placeholder="Введите город"
    />
</template>

<style scoped>
.input {
    width: 260px;
    height: 53px;
    padding: 0px 20px;

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
