<template>
    <div class="wrap">
        <h2> 需要授权 </h2>
        <span> 请输入用户名和密码 </span>
        <VSheet class="mx-auto" width="400" style="margin-top: 20px;">
            <VTextField prepend-inner-icon="mdi-account" v-model="username" type="text" rounded="lg"></VTextField>
            <VTextField prepend-inner-icon="mdi-lock" v-model="password" type="password" rounded="lg"></VTextField>
            <div class="submit">
                <VBtn id="login" rounded="lg" size="x-large" @click="login">登录</VBtn>
                <VBtn id="clear" rounded="lg" size="x-large" @click="clear">复位</VBtn>
            </div>
        </VSheet>
    </div>
    <div id="set">
        <v-icon icon="mdi-cog" size="x-large"></v-icon>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VIcon, VSheet, VTextField } from 'vuetify/components';
import { useRouter } from 'vue-router';

const router = useRouter();

fetch(`https://api.iaalai.cn/p`).then(res => {
    if (res.status == 200) {
        // 已经具备登录信息了
        router.push('/status/overview');
    }
})

import useTitle from '../../store/title';

useTitle().value = 'on login';

let username = ref('');
let password = ref('');

function clear() {
    username.value = '';
    password.value = '';
}

function login() {
    router.push('/status/overview');
}


</script>

<style scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10% auto;
    height: 60%;
    width: 80%;
    min-height: 400px;
    max-height: 800px;
    min-width: 700px;
    max-width: 1200px;
    & .submit {
        display: flex;
        justify-content: space-around;
        width: 100%;
        font-weight: 900;
    }
}

#login {
    background: var(--theme-color-darker);
}

#login:hover {
    background: var(--hover-color);
}

#clear {
    background: #777;
}

#clear:hover {
    background: var(--hover-color);
}

#set {
    position: fixed;
    bottom: 10%;
    right: 10%;
}
</style>