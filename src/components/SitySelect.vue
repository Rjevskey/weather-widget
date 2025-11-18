<script setup>
import { onMounted, ref } from "vue";
import MyButton from "./MyButton.vue";
import IconComponent from "./icon/icons-location.vue";
import Input from "./Input.vue";

const emit = defineEmits({
    selectCity(payload) {
        return payload;
    },
});

let city = ref("Moscow");

let isEdited = ref(false);

onMounted(() => {
    emit("selectCity", city.value);
});

function select() {
    isEdited.value = false;
    emit("selectCity", city.value);
}

function edit() {
    isEdited.value = true;
}

const vFocus = {
    mounted: (el) => el.focus(),
};
</script>

<template>
    <div class="city-select">
        <div v-show="isEdited" class="city-input" @keyup.enter="select()">
            <Input placeholder="Введите город" v-model="city" />
            <MyButton @click="select()"> Сохранить </MyButton>
        </div>
        <MyButton v-show="!isEdited" @click="edit()">
            <template #icon>
                <IconComponent />
                Изменить город
            </template>
        </MyButton>
    </div>
</template>

<style scoped>
.city-input {
    display: flex;
    align-items: stretch;

    gap: 12px;
}

.city-select {
    width: 420px;
}
</style>
