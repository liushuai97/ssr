<template>
    <div class="main">{{ bannerList.rows }}
     
      <ul>
        <li v-for="link in links.data" :key="link.id">{{link.text}}</li>
      </ul>
      {{ movies }}
    </div>
 </template>

<script setup lang="ts">
import { useServerRequest } from '~/composables/useServerRequest';

const [{data:bannerList}, {data:links}, {data: movies}] = await Promise.all([
    useServerRequest('/basic/banner/list'),
    useServerRequest('/basic/link/all'),
    useServerRequest('/web/index')
])
</script>


 <style lang="scss" scoped>
 .main {
    margin: 20px;
 }
 </style>