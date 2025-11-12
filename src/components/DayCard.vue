<script setup>
import IconCloud from "./icon/weather/iconCloud.vue";
import IconRain from "./icon/weather/iconRain.vue";
import IconSun from "./icon/weather/IconSun.vue";

const { weatherCode, temp, date } = defineProps({
    weatherCode: String,
    temp: Number,
    date: Date,
});
</script>

<template>
    <button class="day-card">
        <IconSun v-if="weatherCode == 1000" />
        <IconCloud v-if="weatherCode == 1003" />
        <IconRain v-if="weatherCode == 1009" />
        <div class="day-card__day">
            {{ date.toLocaleDateString("ru-Ru", { weekday: "short" }) }}
        </div>
        <div class="day-card__temp">{{ temp }} °C</div>
    </button>
</template>

<style scoped>
.day-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    cursor: pointer;

    border: none;
    border-radius: 10px;
    box-shadow: 1px 2px 4px 0px #222831;
    padding: 20px 24px;

    color: var(--color-primary);
    background-color: var(--color-bg-card);
}

.day-card:hover {
    background-color: #3a434f;
}

.day-card__day {
    font-size: 20px;
}

.day-card__temp {
    font-size: 20px;
    font-weight: 700;
}
</style>
