<script setup>
    import {ref, computed} from 'vue';
    import {route} from "@/router/route";
    import {useStore} from 'vuex';
    import {hasPermission} from '@/utils/permission';

    const store = useStore();
    const authList = computed(() => store.state.auth.authList);

    const filterRouteData = route => {
        route.forEach(r => {
            if (r.path !== '/home') {
                if (r.children?.length) {
                    filterRouteData(r.children);
                } else {
                    authData.value.push({
                        name: r.name,
                        hasPermission: hasPermission(r.name, authList.value)
                    });
                }
            }
        })
    };

    const authData = ref([]);
    filterRouteData(route);

    const updateAuth = () => {
        const hasPermissionList = authData.value
            .filter(auth => auth.hasPermission)
            .map(filterAuth => filterAuth.name);

        if (hasPermissionList.length === authData.value.length) {
            store.commit('auth/updateAuthList', ['*']);
        } else {
            store.commit('auth/updateAuthList', hasPermissionList);
        }
    };


</script>

<template>
    <div>
        <el-table border stripe :data="authData">
            <el-table-column width="240" label="Menu Name">
                <template #default="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column width="60" label="Auth" align="center">
                <template #default="scope">
                    <el-checkbox v-model="scope.row.hasPermission" @change="updateAuth"></el-checkbox>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped>

</style>
