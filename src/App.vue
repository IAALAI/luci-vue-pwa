<template>
    <title>{{ title }}</title>
    <login :isLogin @logining="logining" v-if="!isLogin"></login>
    <div class="wrap" v-if="isLogin">
        <div class="block nav">
            <a href="/">
                <h2 style="font:900 3em 'genjyuugothic-medium','Consolas';text-align: center">LVP</h2>
            </a>
            <nav>
                <div class="nav-list">
                    <div class="nav-list-info"></div>
                    <div class="nav-list-item"></div>
                </div>
                <div class="nav-list" @click="logout">退出</div>
            </nav>
        </div>
        <div class="block content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useTitle from "./store/title";
import login from "./views/login/login.vue";
import router from "./route";
let isLogin = ref(false);
function logining() {
    isLogin.value = !isLogin.value;
}
function logout() {
    logining();
    location.href = "/";
}
let title = ref(`luci ${useTitle().value}`);

import { nav_item_info } from "@/components/nav/";
console.log(nav_item_info);
</script>

<style>
body,
html,
.wrap {
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .block {
        padding: 4px 24px;
        border-radius: 3em;
        height: calc(100% - 10%);
        background: rgb(28, 29, 30);
    }

    .nav {
        width: 260px;

        & nav {
            height: calc(100% - 3em);
            overflow-y: scroll;
        }

        & nav::-webkit-scrollbar {
            width: 4px;
            height: 8px;
        }

        & nav::-webkit-scrollbar-track {
            display: none;
        }

        & nav::-webkit-scrollbar-thumb {
            background-color: #333;
            /* 滑块颜色 */
            border-radius: 2px;
            /* 圆角 */
        }
    }

    .content {
        width: calc(90% - 260px);
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .content ::-webkit-scrollbar {
        width: 4px;
        height: 8px;
    }

    .content::-webkit-scrollbar-track {
        display: none;
    }

    .content::-webkit-scrollbar-thumb {
        background-color: #333;
        /* 滑块颜色 */
        border-radius: 2px;
        /* 圆角 */
    }
}
</style>
