<script setup>
import { ref, onMounted } from "vue";
import PaneRight from "./components/PaneRight.vue";
import PaneLeft from "./components/PaneLeft.vue";
import WeatherApi from "./components/WeatherApi.vue";

let savedCity = ref("Moscow");
const weatherApi = ref(null);

let leftPanelData = ref({
    date: new Date(),
    temp: 20,
    weatherCode: 0,
    city: "Москва",
});

async function getCity(city) {
    savedCity.value = city;
    leftPanelData.value.city = city;
    await weatherApi.value.fetchWeather(city);
}

function handleDayClick(dayData) {
    leftPanelData.value = {
        date: dayData.date,
        temp: dayData.temp,
        weatherCode: dayData.weatherCode,
        city: savedCity.value,
    };
}
onMounted(() => {
    weatherApi.value.fetchWeather(savedCity.value);
});
</script>

<template>
    <div class="app">
        <PaneLeft :selectedDay="leftPanelData" />
        <PaneRight
            :savedCity="savedCity"
            :getCity="getCity"
            @day-click="handleDayClick"
        />
        <WeatherApi ref="weatherApi" />
    </div>
</template>

<style>
.app {
    display: flex;
    padding: 20px;
}
</style>
