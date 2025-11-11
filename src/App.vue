<script setup>
import Stat from "./components/Stat.vue";
import SitySelect from "./components/SitySelect.vue";
import WeatherApi from "./components/WeatherApi.vue";
import { computed, ref, onMounted } from "vue";

let savedCity = ref("Moscow");
const weatherApi = ref();

const dataModified = computed(() => {
    if (!weatherApi.value?.weatherData) return [];

    const data = weatherApi.value.weatherData;
    return [
        {
            label: "Влажность",
            stat: Math.round(data.humidity) + "%",
        },
        {
            label: "Осадки",
            stat: data.precipitation + "мм",
        },
        {
            label: "Ветер",
            stat: Math.round(data.windspeed) + "м/с",
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
        <div id="city">{{ savedCity }}</div>
        <!-- 🎯 ДОБАВЛЯЕМ отображение температуры из weatherApi -->
        <div v-if="weatherApi?.weatherData" class="temperature">
            🌡️ {{ Math.round(weatherApi.weatherData.temperature) }}°C
        </div>
        <Stat v-for="item in dataModified" v-bind="item" :key="item.label" />
        <SitySelect @select-city="getCity"></SitySelect>

        <!-- 🎯 ДОБАВЛЯЕМ компонент WeatherApi в шаблон -->
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
</style>
