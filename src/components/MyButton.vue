<script setup>
defineEmits(["click"]);
</script>

<template>
    <button class="button" @click="$emit('click')">
        <div>
            <slot name="icon"></slot>
        </div>
        <slot />
    </button>
</template>

<style scoped>
.button {
    width: 100%;
    height: 53px;
    padding: 14px;

    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    gap: 9px;
    align-items: center;

    font-family: var(--font);
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);

    cursor: pointer;

    background: var(--gradient);
}

.button:hover {
    background: var(--gradient-inverted);
}
</style>
