<script setup>
    import {computed} from 'vue';
    import {useRoute} from 'vue-router'

    const route = useRoute();
    const breadcrumbArray = computed(() => route.matched.filter(r => r.path));
</script>

<template>
    <div id="app_breadcrumb" class="flex-row-center">
        <el-icon style="margin-right: 20px"><more-filled/></el-icon>
        <el-breadcrumb>
            <el-breadcrumb-item v-for="breadcrumb in breadcrumbArray" :key="breadcrumb.path">
                {{breadcrumb.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped>

</style>
