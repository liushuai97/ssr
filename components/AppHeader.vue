<template>
    <header class="header">
        头部
        <ul v-loading="pending">
            <li v-for="item in navigation.data" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
        <el-button @click="refresh">update</el-button>
    </header>
</template>

<script setup lang="ts">
const route = useRoute()
const searchValue = ref<string>('')
const token = ref<string | undefined>(undefined)

const { data: navigation, refresh, pending } = await useServerRequest<{data: any}>('column/all', {
    query: {status: 0}
});

console.log(navigation)

</script>