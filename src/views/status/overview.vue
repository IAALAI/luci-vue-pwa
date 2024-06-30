<template>
    <h2>
        状态信息
    </h2>
    <VCard>
        <span class="table_title">系统</span>
        <v-data-table :items="system_info"></v-data-table>
    </VCard>
    <VCard>
        <span class="table_title">内存信息</span>
        </VCard>
    <VCard>
        <span class="table_title">接口</span>
    </VCard>
    <VCard>
        <span class="table_title">网络</span>
    </VCard>
    <VCard>
        <span class="table_title">无线</span>
    </VCard>
</template>

<script lang="ts" setup>
import { VCard } from "vuetify/components"
import system_info from "./status.json"
</script>

<style scoped>
    .table_title {
        padding-left: 20px;
        font-size: 20px;
        line-height: 2;
        font-weight: 900;
    }

    .v-card {
        border-radius: 20px;
        margin-top: 20px;
    }
</style>