<script setup>
import IconCloud from "./icon/weather/iconCloud.vue";
import IconRain from "./icon/weather/iconRain.vue";
import IconSun from "./icon/weather/IconSun.vue";

const { weatherCode, temp, date } = defineProps({
    weatherCode: Number,
    temp: Number,
    date: Date,
});

const formattedTemp = Math.round(temp);

// Добавляем эмит для отправки данных родителю
const emit = defineEmits(["day-click"]);

function handleClick() {
    emit("day-click", {
        date: date,
        temp: temp,
        weatherCode: weatherCode,
    });
}
</script>

<template>
    <button class="day-card" @click="handleClick">
        <IconSun v-if="weatherCode === 0 || weatherCode === 1" />
        <IconCloud v-else-if="weatherCode >= 2 && weatherCode <= 3" />
        <IconRain
            v-else-if="
                (weatherCode >= 51 && weatherCode <= 67) ||
                (weatherCode >= 80 && weatherCode <= 82) ||
                (weatherCode >= 95 && weatherCode <= 99)
            "
        />
        <IconCloud v-else />

        <div class="day-card__day">
            {{ date.toLocaleDateString("ru-Ru", { weekday: "short" }) }}
        </div>

        <div class="day-card__temp">
            <span class="temp-value">{{ formattedTemp }}</span>
            <span class="temp-unit">°C</span>
        </div>
    </button>
</template>

<style scoped>
.day-card {
    width: 100%;

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
    display: flex;
    align-items: baseline;
    gap: 2px;
}

.temp-value {
    font-size: 20px;
}

.temp-unit {
    font-size: 16px;
    opacity: 0.8;
}
</style>
