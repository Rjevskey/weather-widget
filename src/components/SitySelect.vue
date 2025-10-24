<script setup>
import MyButton from "./MyButton.vue";
import IconComponent from "./icon/icons-location.vue";
</script>

<template>
    <MyButton>
        <IconComponent />
        Изменить город
    </MyButton>
    <input />
    <MyButton> Сохранить </MyButton>
</template>
