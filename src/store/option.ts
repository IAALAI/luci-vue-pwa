import { defineStore } from "pinia"

const useOption = defineStore('option', {
    state: () => ({
        server: localStorage.getItem("server"),
        auth: localStorage.getItem("auth")
    }),
    actions: {
        setServers(value: string) {
            localStorage.setItem("server", value)
            this.server = value
        },
        setAuth(value: string) {
            localStorage.setItem("auth", value)
            this.auth = value
        }
    }
})

export default useOption