<script setup>
const { color = "white", size = 40 } = defineProps({
    color: String,
    size: Number,
});
</script>

<template>
    <svg
        :width="size"
        :height="size"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <!-- Основное облако -->
        <path
            d="M30 25C32.5 25 34.5 23 34.5 20.5C34.5 18 32.5 16 30 16C29.5 14.5 28 13 26 13C23.5 13 21.5 15 21.5 17.5C21.5 17.5 21.5 17.5 21.5 17.5C19.5 17.5 18 19 18 21C18 23 19.5 24.5 21.5 24.5C22.5 24.5 23.5 24 24 23C25.5 24.5 27.5 25 30 25Z"
            :stroke="color"
            stroke-width="1.5"
            fill="none"
        />

        <!-- Капли дождя -->
        <path d="M15 28L17 32" :stroke="color" stroke-width="1.5" />
        <path d="M20 28L22 32" :stroke="color" stroke-width="1.5" />
        <path d="M25 28L27 32" :stroke="color" stroke-width="1.5" />
    </svg>
</template>
