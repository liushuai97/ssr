<template>
    <div class="main">{{ bannerList.rows }}</div>
 </template>

<script setup lang="ts">
import { useServerRequest } from '~/composables/useServerRequest';

const [{data:bannerList}] = await Promise.all([
    useServerRequest('/basic/banner/list')
])
</script>


 <style lang="scss" scoped>
 .main {
    margin: 20px;
 }
 </style>