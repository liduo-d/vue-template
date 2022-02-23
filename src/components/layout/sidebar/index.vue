<script setup>
    import {computed} from 'vue'
    import {useRoute} from 'vue-router'
    import {useStore} from 'vuex'
    import {route as routeList} from '@/router/route'
    import SidebarItem from './SidebarItem.vue'

    const route = useRoute();
    const store = useStore();

    const activeMenu = computed(() => route.path);

    const isCollapse = computed(() => store.state.app.collapse);

</script>

<template>
    <el-menu
            :default-active="activeMenu"
            unique-opened
            :collapse="isCollapse"
    >
        <SidebarItem
                v-for="item in routeList"
                :key="item.path"
                :item="item"
                :collapse="isCollapse"
        ></SidebarItem>
    </el-menu>
</template>

<style scoped>

</style>
