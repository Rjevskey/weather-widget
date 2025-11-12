<script setup>
const { color = "white", size = 55 } = defineProps({
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
        <!-- Центральный круг -->
        <circle
            cx="20"
            cy="20"
            r="6"
            fill="none"
            :stroke="color"
            stroke-width="1.5"
        />

        <!-- Лучи -->
        <line
            x1="20"
            y1="8"
            x2="20"
            y2="4"
            :stroke="color"
            stroke-width="1.5"
        />
        <line
            x1="20"
            y1="32"
            x2="20"
            y2="36"
            :stroke="color"
            stroke-width="1.5"
        />
        <line
            x1="8"
            y1="20"
            x2="4"
            y2="20"
            :stroke="color"
            stroke-width="1.5"
        />
        <line
            x1="32"
            y1="20"
            x2="36"
            y2="20"
            :stroke="color"
            stroke-width="1.5"
        />

        <!-- Диагональные лучи -->
        <line
            x1="12"
            y1="12"
            x2="9"
            y2="9"
            :stroke="color"
            stroke-width="1.5"
        />
        <line
            x1="28"
            y1="12"
            x2="31"
            y2="9"
            :stroke="color"
            stroke-width="1.5"
        />
        <line
            x1="12"
            y1="28"
            x2="9"
            y2="31"
            :stroke="color"
            stroke-width="1.5"
        />
        <line
            x1="28"
            y1="28"
            x2="31"
            y2="31"
            :stroke="color"
            stroke-width="1.5"
        />
    </svg>
</template>

<style scoped></style>
