<script setup>
import { ref } from "vue";

const weatherData = ref({
    current: {
        temp_c: 15,
        humidity: 65,
        precipitation: 0,
        wind_speed: 10,
        condition: { code: 1000 },
    },
    forecast: {
        forecastday: [
            {
                date: "2024-10-29",
                day: {
                    avgtemp_c: 16,
                    condition: { code: 1000 },
                },
            },
            {
                date: "2024-10-30",
                day: {
                    avgtemp_c: 14,
                    condition: { code: 1003 },
                },
            },
            {
                date: "2024-10-31",
                day: {
                    avgtemp_c: 12,
                    condition: { code: 1063 },
                },
            },
            {
                date: "2024-11-01",
                day: {
                    avgtemp_c: 10,
                    condition: { code: 1063 },
                },
            },
        ],
    },
});

const fetchWeather = async (city) => {
    try {
        let coordinates;
        if (
            city.toLowerCase() === "moscow" ||
            city.toLowerCase() === "москва"
        ) {
            coordinates = { latitude: 55.7558, longitude: 37.6173 };
        } else if (
            city.toLowerCase() === "london" ||
            city.toLowerCase() === "лондон"
        ) {
            coordinates = { latitude: 51.5074, longitude: -0.1278 };
        } else {
            coordinates = { latitude: 55.7558, longitude: 37.6173 };
        }

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weather_code,temperature_2m_max,relative_humidity_2m_mean,precipitation_sum,wind_speed_10m_max&timezone=auto&forecast_days=4`
        );

        const data = await response.json();

        if (data.daily) {
            weatherData.value = {
                current: {
                    temp_c: data.daily.temperature_2m_max[0],
                    humidity: data.daily.relative_humidity_2m_mean[0] || 65,
                    precipitation: data.daily.precipitation_sum[0] || 0,
                    wind_speed: data.daily.wind_speed_10m_max[0] || 10,
                    condition: { code: data.daily.weather_code[0] },
                },
                forecast: {
                    forecastday: data.daily.time
                        .map((date, index) => ({
                            date: date,
                            day: {
                                avgtemp_c: data.daily.temperature_2m_max[index],
                                condition: {
                                    code: data.daily.weather_code[index],
                                },
                            },
                        }))
                        .slice(0, 4),
                },
            };
        }
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
};

defineExpose({
    weatherData,
    fetchWeather,
});
</script>

<template></template>

<style scoped></style>
