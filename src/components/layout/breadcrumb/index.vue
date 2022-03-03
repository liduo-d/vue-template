<script setup>
    import {computed} from 'vue';
    import {useRoute} from 'vue-router'

    const route = useRoute();
    const breadcrumbArray = computed(() => route.meta?.customName?.split(',') || []);
</script>

<template>
    <div id="appBreadcrumb" class="flex-row-center">
        <el-icon style="margin-right: 20px">
            <more-filled/>
        </el-icon>
        <el-breadcrumb>
            <el-breadcrumb-item v-for="breadcrumb in breadcrumbArray" :key="breadcrumb">
                {{breadcrumb}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped>

</style>
