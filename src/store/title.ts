import { defineStore } from "pinia";

const useTitle = defineStore('title', {
    state: () => ({
        value: ` -- `
    }),
    actions: {
    }
})

export default useTitle