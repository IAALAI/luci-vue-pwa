
<template>
    <h2>
        系统日志
    </h2>
    <log>
        日志展示似乎属于高频使用内容
        这里将其抽出作为一个单独的组件
        然后这里到luci请求syslog放到单独的日志展示组件中渲染
    </log>
</template>

<script lang="ts" setup>
let log_content = ref('')
</script>

<style scoped>

</style>