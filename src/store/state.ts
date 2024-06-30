import { defineStore } from "pinia";

const useState = defineStore('state', {
    state: () => ({
        isLogin: false,
        isVip: false
    }),
    actions: {
        onLogin() {
            this.isLogin = !this.isLogin;
        }
    }
})

export default useState