<script setup>
import DayCard from "./DayCard.vue";
import SitySelect from "./SitySelect.vue";
import Stat from "./Stat.vue";
import WeatherApi from "./WeatherApi.vue";
import { computed, ref, onMounted } from "vue";

const props = defineProps({
    savedCity: String,
    getCity: Function,
});

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

onMounted(() => {
    if (weatherApi.value) {
        weatherApi.value.fetchWeather(props.savedCity);
    }
});

const emit = defineEmits(["day-click"]);

function handleDayClick(day) {
    emit("day-click", {
        date: dayData.date,
        temp: dayData.temp,
        weatherCode: dayData.weatherCode,
    });
}
</script>

<template>
    <div class="right">
        <div v-if="weatherApi?.weatherData" class="state">
            <div class="temperature">
                🌡️ {{ Math.round(weatherApi.weatherData.current.temp_c) }}°C
            </div>
            <div id="city">{{ savedCity }}</div>
            <div class="stat-list">
                <Stat
                    v-for="item in dataModified"
                    v-bind="item"
                    :key="item.label"
                />
            </div>
            <div class="day-card-list">
                <DayCard
                    v-for="item in weatherApi.weatherData.forecast.forecastday"
                    :key="item.date"
                    :weather-code="item.day.condition.code"
                    :temp="item.day.avgtemp_c"
                    :date="new Date(item.date)"
                    @day-click="handleDayClick(item)"
                />
            </div>
        </div>

        <SitySelect @select-city="getCity"></SitySelect>
        <WeatherApi ref="weatherApi" />
    </div>
</template>

<style scoped>
.right {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 0px 30px 30px 0px;
    flex: 1;
}

.state {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.temperature {
    font-size: 24px;
    font-weight: bold;
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

#city {
    font-size: 20px;
    font-weight: 600;
}
</style>
