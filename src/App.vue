<script setup>
import Stat from "./components/Stat.vue";
import SitySelect from "./components/SitySelect.vue";
import WeatherApi from "./components/WeatherApi.vue";
import { computed, ref, onMounted } from "vue";
import DayCard from "./components/DayCard.vue";

let savedCity = ref("Moscow");
const weatherApi = ref();

const dataModified = computed(() => {
    return [];

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
        <div v-if="data">
            <DayCard weather-code="1000" temp="30" :date="new Date()" />
            <Stat
                v-for="item in dataModified"
                v-bind="item"
                :key="item.label"
            />
        </div>
        <div id="city">{{ savedCity }}</div>

        <div v-if="weatherApi?.weatherData" class="temperature">
            🌡️ {{ Math.round(weatherApi.weatherData.temperature) }}°C
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
</style>
