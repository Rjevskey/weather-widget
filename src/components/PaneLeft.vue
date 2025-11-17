<script setup>
import IconSun from "./icon/weather/IconSun.vue";
import IconCloud from "./icon/weather/iconCloud.vue";
import IconRain from "./icon/weather/iconRain.vue";
import IconLocation from "./icon/icons-location.vue";

const props = defineProps({
    selectedDay: Object,
});
</script>

<template>
    <div class="left-panel">
        <div class="top">
            <div class="weekday">
                {{
                    selectedDay.date.toLocaleDateString("ru-RU", {
                        weekday: "long",
                    })
                }}
            </div>
            <div class="date">
                {{ selectedDay.date.toLocaleDateString("ru-RU") }}
            </div>
            <div class="city">
                <IconLocation :size="20" />
                {{ selectedDay.city }}
            </div>
        </div>

        <div class="bottom">
            <div class="weather-icon">
                <IconSun
                    v-if="
                        selectedDay.weatherCode === 0 ||
                        selectedDay.weatherCode === 1
                    "
                    :size="80"
                />
                <IconCloud
                    v-else-if="
                        selectedDay.weatherCode >= 2 &&
                        selectedDay.weatherCode <= 3
                    "
                    :size="80"
                />
                <IconRain v-else :size="80" />
            </div>
            <div class="temp">{{ Math.round(selectedDay.temp) }}°C</div>
            <div class="weather-text">
                <span
                    v-if="
                        selectedDay.weatherCode === 0 ||
                        selectedDay.weatherCode === 1
                    "
                    >Солнечно</span
                >
                <span
                    v-else-if="
                        selectedDay.weatherCode >= 2 &&
                        selectedDay.weatherCode <= 3
                    "
                    >Облачно</span
                >
                <span v-else>Дождливо</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.left-panel {
    width: 500px;
    height: 660px;
    background: var(--color-bg-card);
    border-radius: 30px 0px 0px 30px;
    padding: 30px;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(./img/LeftForest.jpg);
    background-size: cover;
    background-position: center;
}

.top {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.weekday {
    font-size: 20px;
    font-weight: bold;

    text-transform: capitalize;
}

.date {
    font-size: 24px;
    font-weight: bold;
}

.city {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
}

.bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.temp {
    font-size: 40px;
    font-weight: bold;
}

.weather-text {
    font-size: 18px;
}
</style>
