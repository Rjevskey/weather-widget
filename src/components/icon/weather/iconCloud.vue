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

        <!-- Маленькое облачко -->
        <path
            d="M12 20C13.5 20 14.5 19 14.5 17.5C14.5 16 13.5 15 12 15C11.5 14 10.5 13 9 13C7.5 13 6.5 14.5 6.5 16C6.5 16 6.5 16 6.5 16C5.5 16 4.5 17 4.5 18C4.5 19 5.5 20 6.5 20C7 20 7.5 19.5 8 19C8.5 20 10 20 12 20Z"
            :stroke="color"
            stroke-width="1.5"
            fill="none"
        />
    </svg>
</template>
