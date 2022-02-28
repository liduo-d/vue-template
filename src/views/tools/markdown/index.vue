<script setup>
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css';

    import {ref} from 'vue';

    const value = ref('');
    const submit = () => {
        // submit value.value
    };
</script>

<script>
    export default {
        name: 'Markdown'
    }
</script>

<template>
    <div>
        <mavonEditor ref="markdownEditor" v-model="value" :language="'en'"></mavonEditor>
        <el-button style="margin-top: 30px;" @click="submit">Submit</el-button>
    </div>
</template>

<style scoped>

</style>
