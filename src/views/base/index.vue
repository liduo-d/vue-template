<script setup>
    import {computed} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();

    const tagsList = computed(() =>
        store.state.app.tagsList.map(t => t.name)
    );
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
                <component :is="Component"/>
            </keep-alive>
        </transition>
    </router-view>
</template>

<style scoped>

</style>
