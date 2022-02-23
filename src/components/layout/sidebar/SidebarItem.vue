<script setup>
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import path from 'path-browserify'

    import {isExternal} from '@/utils/validate'

    const props = defineProps({
        item: Object,
        collapse: Boolean,
        basePath: {type: String, default: ''}
    });

    const router = useRouter();
    const store = useStore();
    const handleMenu = menu => {
        router.push(resolvePath(menu.path));
        // store.commit('app/setTagsItem', {
        //     name: menu.name,
        //     path: resolvePath(menu.path)
        // })
    };
    const resolvePath = menuPath => {
        if (isExternal(menuPath)) {
            return menuPath;
        }
        if (isExternal(props.basePath)) {
            return props.basePath;
        }
        return path.resolve(props.basePath, menuPath);
    };
</script>

<template>
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="resolvePath(item.path)">
        <template #title>
            <el-icon>
                <component :is="item.meta?.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
        </template>
        <sidebar-item v-for="inner in item.children" :key="inner.path" :item="inner"
                      :base-path="resolvePath(item.path)"></sidebar-item>
    </el-sub-menu>
    <el-menu-item v-else :index="resolvePath(item.path)" @click="handleMenu(item)">
        <el-icon>
            <component :is="item.meta?.icon"></component>
        </el-icon>
        <template #title>{{ item.name }}</template>
    </el-menu-item>
</template>

<style></style>
