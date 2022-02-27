<script setup>
    import {computed, ref} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'

    import {getSystemTheme, setSystemTheme} from '@/utils/theme'
    import {REPOSITORY_URL, DEFAULT_THEME} from '@/constants/common'

    const store = useStore();
    const router = useRouter();
    const isCollapse = computed(() => store.state.app.collapse);
    const toggleSidebar = status => store.commit('app/handleCollapse', status);
    const systemThemeColor = ref(getSystemTheme()['--systemThemeColor'] || DEFAULT_THEME);
    const displayTagview = ref(store.state.app.displayTagview);
    const displayBreadcrumb = ref(store.state.app.displayBreadcrumb);
    const user = localStorage.getItem('d-username') || 'User';

    const updateDisplayTagview = val => store.commit('app/handleTagview', val);
    const updateDisplayBreadcrumb = val => store.commit('app/handleBreadcrumb', val);

    const handleCommand = command => {
        if (command === 'repository') {
            window.open(REPOSITORY_URL);
        } else if (command === 'logout') {
            localStorage.removeItem('d-username');
            router.push('/login');
        }
    };
</script>

<template>
    <div id="appHeader" class="flex-row-between">
        <div id="appLogo" class="flex-row-center">
            <img src="@/assets/logo.png" alt="Logo"/>
            <span id="appTitle">Vue Template System</span>
            <el-icon v-if="isCollapse" :size="20" class="pointer" @click="toggleSidebar(false)">
                <expand/>
            </el-icon>
            <el-icon v-else :size="20" class="pointer" @click="toggleSidebar(true)">
                <fold/>
            </el-icon>
        </div>

        <div class="flex-row-center">
            <div>
                System Theme:
                <el-color-picker v-model="systemThemeColor" @active-change="setSystemTheme"/>
            </div>
            <div>
                Display Tagview:
                <el-switch v-model="displayTagview" @change="updateDisplayTagview"/>
            </div>
            <div>
                Display Breadcrumb:
                <el-switch v-model="displayBreadcrumb" @change="updateDisplayBreadcrumb"/>
            </div>
            <el-dropdown @command="handleCommand">
                <div class="flex-row-center">
                    <img class="user-image pointer" src="@/assets/user.png" alt="User"/>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="repository">
                            <el-icon>
                                <user-filled/>
                            </el-icon>
                            Repository
                        </el-dropdown-item>
                        <el-dropdown-item divided command="logout">
                            <el-icon>
                                <switch-button/>
                            </el-icon>
                            Logout
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>{{user}}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    :deep(.el-color-picker), :deep(.el-switch) {
        margin-right: 15px;
    }

    .user-image {
        width: 46px;
        height: 46px;
        background-color: #f0f0f0;
        border-radius: 50%;
        margin: 0 10px;
    }
</style>
