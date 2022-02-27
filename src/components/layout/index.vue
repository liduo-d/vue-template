<script setup>
    import {computed, onMounted} from 'vue'
    import Navbar from "./navbar/index.vue";
    import Sidebar from "./sidebar/index.vue";
    import Tagview from "./tagview/index.vue";
    import Breadcrumb from "./breadcrumb/index.vue";
    import {useStore} from 'vuex';
    import {saveSystemTheme, getSystemTheme, getSystemThemeByDom, setSystemTheme} from '@/utils/theme'
    import {DEFAULT_THEME_OBJECT} from '@/constants/common'

    const store = useStore();

    const isCollapse = computed(() => store.state.app.collapse);
    const tagsList = computed(() => store.state.app.tagsList);
    const displayTagview = computed(() => store.state.app.displayTagview);
    const displayBreadcrumb = computed(() => store.state.app.displayBreadcrumb);

    onMounted(() => setSystemTheme(getSystemTheme() || DEFAULT_THEME_OBJECT));

    window.onunload = () => {
        saveSystemTheme(getSystemThemeByDom());
        sessionStorage.setItem('storeApp', JSON.stringify(store.state.app));
        sessionStorage.setItem('storeAuth', JSON.stringify(store.state.auth));
    };
</script>

<template>
    <div id="appLayout">
        <Navbar/>
        <Sidebar/>
        <div id="appMainWrapper" class="flex-col" :class="{ 'sidebar-collapse': isCollapse }">
            <Tagview v-if="displayTagview"/>
            <Breadcrumb v-if="displayBreadcrumb"/>
            <div id="appMain" class="flex-1">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component"/>
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
