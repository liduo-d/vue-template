<script setup>
    import {ref} from 'vue';

    const tableData = ref([]);
    const mockData = () => {
        for (let i = 1; i < 5; i++) {
            tableData.value.push({
                date: `2022-02-0${i}`,
                name: 'liduo-d',
                description: 'Idempotent developer'
            });
        }
    };
    mockData();
</script>

<script>
    export default {
        name: 'BaseTable'
    }
</script>

<template>
    <div>
        <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column prop="date" label="Date"/>
            <el-table-column prop="name" label="Name"/>
            <el-table-column prop="description" label="Description"/>
        </el-table>
    </div>
</template>

<style scoped>

</style>
