<script setup></script>

<template>
    <div class="stat">
        <div class="stat-name">Влажность</div>
        <div class="stat-value">0%</div>
    </div>
</template>

<style scoped>
.stat {
    display: flex;
    justify-content: space-between;

    gap: 16px;

    font-size: 28px;
}

.stat-name {
    font-size: 28px;
    font-weight: 700;
}

.stat-value {
    font-weight: 500;
}
</style>
