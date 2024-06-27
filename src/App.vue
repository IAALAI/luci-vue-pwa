<template>
    <title>{{ title }}</title>
    <nav class="" v-if="isLogin"></nav>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useTitle from "./store/title";
let isLogin = ref(false);
let title = ref(`luci ${useTitle().value}`);
</script>

<style>
body, html {
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
</style>
