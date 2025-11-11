<script setup>
import { ref } from "vue";

let weatherStuff = ref({
    humidity: 65,
    rain: 0,
    windspeed: 3,
    temp: 15,
});

async function getWeather(cityName) {
    let lat = 0;
    let lon = 0;

    if (
        cityName === "Moscow" ||
        cityName === "москва" ||
        cityName === "Москва"
    ) {
        lat = 55.7558;
        lon = 37.6173;
    } else if (
        cityName === "London" ||
        cityName === "london" ||
        cityName === "Лондон"
    ) {
        lat = 51.5074;
        lon = -0.1278;
    } else {
        lat = 55.7558;
        lon = 37.6173;
    }

    try {
        const result = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&timezone=auto`
        );
        const jsonData = await result.json();

        if (jsonData.current) {
            weatherStuff.value.humidity = jsonData.current.relative_humidity_2m;
            weatherStuff.value.precipitation = jsonData.current.precipitation;
            weatherStuff.value.windspeed = jsonData.current.wind_speed_10m;
            weatherStuff.value.temperature = jsonData.current.temperature_2m;
        }
    } catch (err) {
        weatherStuff.value = {
            humidity: 65,
            precipitation: 0,
            windspeed: 3,
            temperature: 15,
        };
    }
}

defineExpose({
    weatherData: weatherStuff,
    fetchWeather: getWeather,
});
</script>

<template></template>

<style scoped></style>
