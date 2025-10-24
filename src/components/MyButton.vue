<script setup></script>

<template>
    <button class="button">
        <div>
            <slot name="icon"></slot>
        </div>
        <slot />
    </button>
</template>

<style scoped>
.button {
    padding: 14px;
    border: none;
    border-radius: 10px;

    display: flex;
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
