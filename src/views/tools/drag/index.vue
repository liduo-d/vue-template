<script setup>
    import Sortable from 'sortablejs';
    import {ref, onMounted} from 'vue';

    const data1 = ref([
        {id: 1, value: 'G_A_1'},
        {id: 2, value: 'G_A_2'},
        {id: 3, value: 'G_A_3'}
    ]);
    const data2 = ref([
        {id: 4, value: 'G_B_1'},
        {id: 5, value: 'G_B_2'},
        {id: 6, value: 'G_B_3'}
    ]);
    const data3 = ref([
        {id: 7, value: 'G_C_1'},
        {id: 8, value: 'G_C_2'},
        {id: 9, value: 'G_C_3'}
    ]);

    const dataMap = new Map;
    [...data1.value, ...data2.value, ...data3.value].forEach(d => {
        dataMap.set(d.id, d);
    });

    const id2obj = arr => {
        return arr.map(i => dataMap.get(Number(i)));
    };

    onMounted(() => {
        const g1 = document.getElementById('g1');
        const ops1 = {
            animation: 400,
            draggable: ".item",
            group: {pull: true, put: true},
            onEnd: ev => {
                data1.value = id2obj(sortable1.toArray());
                data2.value = id2obj(sortable2.toArray());
                data3.value = id2obj(sortable3.toArray());
            }
        };
        const sortable1 = Sortable.create(g1, ops1);

        const g2 = document.getElementById('g2');
        const ops2 = {
            animation: 400,
            draggable: ".item",
            group: {pull: true, put: true},
            onEnd: ev => {
                data1.value = id2obj(sortable1.toArray());
                data2.value = id2obj(sortable2.toArray());
                data3.value = id2obj(sortable3.toArray());
            }
        };
        const sortable2 = Sortable.create(g2, ops2);

        const g3 = document.getElementById('g3');
        const ops3 = {
            animation: 400,
            draggable: ".item",
            group: {pull: true, put: true},
            onEnd: ev => {
                data1.value = id2obj(sortable1.toArray());
                data2.value = id2obj(sortable2.toArray());
                data3.value = id2obj(sortable3.toArray());
            }
        };
        const sortable3 = Sortable.create(g3, ops3);
    })


</script>

<template>
    <div class="flex-row">
        <div id="g1" class="group">
            <div>G_A</div>
            <div v-for="data in data1" :key="data.id" class="item" :data-id="data.id">{{data.value}}</div>
        </div>
        <div id="g2" class="group">
            <div>G_B</div>
            <div v-for="data in data2" :key="data.id" class="item" :data-id="data.id">{{data.value}}</div>
        </div>
        <div id="g3" class="group">
            <div>G_C</div>
            <div v-for="data in data3" :key="data.id" class="item" :data-id="data.id">{{data.value}}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .group {
        width: 30%;
        float: left;
        margin: 10px 10px 10px auto;
    }

    .group {
        .item {
            padding: 6px;
            background-color: #fdfdfd;
            border: solid 1px #eee;
            margin-top: 10px;
            cursor: move;
        }
    }
</style>
