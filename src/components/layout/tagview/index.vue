<script setup>
    import {computed} from 'vue'
    import {useRoute, useRouter, onBeforeRouteUpdate} from 'vue-router'
    import {useStore} from 'vuex'

    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const activeMenu = computed(() => route.fullPath);
    const tagsList = computed(() => store.state.app.tagsList);
    const handleTag = tag => {
        if (tag.path === route.fullPath) return;
        router.push(tag.path);
        setTags(tag);
    };
    const handleClose = tag => {
        store.commit('app/removeTagsItem', tag);
    };
    const setTags = tag => {
        store.commit('app/setTagsItem', {
            name: tag.name,
            path: tag.fullPath || tag.path
        });
    };
    setTags(route);
    onBeforeRouteUpdate(to => setTags(to));

</script>

<template>
    <div id="appTags">
        <el-tag v-for="(item, index) in tagsList"
                :key="index.path"
                size="large"
                class="pointer tag-view"
                :class="{'active-tag-view': activeMenu===item.path}"
                :closable="!item.unCloseable"
                :name="item.id"
                @click="handleTag(item)"
                @close="handleClose(item)">
            {{ item.name }}
        </el-tag>
    </div>
</template>

<style scoped>

</style>
