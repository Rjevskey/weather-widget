<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
import IconComponent from "./icon/icons-location.vue";
import Input from "./Input.vue";

const emit = defineEmits({
    selectCity(payload) {
        return payload;
    },
});

let city = ref("");

let isEdited = ref(false);

function select() {
    isEdited.value = false;
    emit("selectCity", "London");
}

function edit() {
    isEdited.value = true;
}
</script>

<template>
    <div class="city-select">
        {{ city }}
        <div v-show="isEdited" class="city-input">
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

    gap: 12px;
}

.city-select {
    width: 420px;
}
</style>
