<template>
    <h2>
        计划任务
    </h2>
    <span>
        自定义系统的 cron 中的计划任务
    </span>
    <span>
        注意: 请检查 cron 服务是否开启,如果 crontab 文件在编辑前为空,会关闭 cron 服务
    </span>
    这里就不用 vuetify 自带的多行文本了,单独导一个 monaco-editor,然后再引入 cron 的支持
</template>

<script lang="ts" setup>

</script>

<style>
</style>