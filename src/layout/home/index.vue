<template>
    <div>
        <Header />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue';
import { RouterView } from "vue-router";

</script>

<style lang="scss" scoped>

</style>