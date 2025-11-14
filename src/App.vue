<script setup>
import Stat from "./components/Stat.vue";
import SitySelect from "./components/SitySelect.vue";
import WeatherApi from "./components/WeatherApi.vue";
import { computed, ref, onMounted } from "vue";
import DayCard from "./components/DayCard.vue";

let savedCity = ref("Moscow");
const weatherApi = ref();
const dataModified = computed(() => {
    if (!weatherApi.value?.weatherData) return [];

    const data = weatherApi.value.weatherData.current;
    return [
        {
            label: "Влажность",
            stat: Math.round(data.humidity) + "%",
        },
        {
            label: "Осадки",
            stat: (data.precipitation || 0) + "мм",
        },
        {
            label: "Ветер",
            stat: Math.round(data.wind_speed || 10) + "км/ч",
        },
    ];
});

async function getCity(city) {
    savedCity.value = city;
    await weatherApi.value.fetchWeather(city);
}

onMounted(() => {
    weatherApi.value.fetchWeather(savedCity.value);
});
</script>

<template>
    <main class="main">
        <div v-if="weatherApi?.weatherData" class="state">
            <div v-if="weatherApi?.weatherData" class="temperature">
                🌡️ {{ Math.round(weatherApi.weatherData.current.temp_c) }}°C
            </div>
            <div id="city">{{ savedCity }}</div>
            <divc class="stat-list">
                <Stat
                    v-for="item in dataModified"
                    v-bind="item"
                    :key="item.label"
                />
            </divc>
            <div class="day-card-list">
                <DayCard
                    v-for="item in weatherApi.weatherData.forecast.forecastday"
                    :key="item.date"
                    :weather-code="item.day.condition.code"
                    :temp="item.day.avgtemp_c"
                    :date="new Date(item.date)"
                />
            </div>
        </div>

        <SitySelect @select-city="getCity"></SitySelect>
        <WeatherApi ref="weatherApi" />
    </main>
</template>

<style scoped>
.main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
}

.temperature {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.stat-list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 70px;
}
.day-card-list {
    display: flex;
    gap: 5px;
}
</style>
