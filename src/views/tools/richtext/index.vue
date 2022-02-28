<script setup>
    import {onMounted, onBeforeUnmount} from "vue";
    import WangEditor from "wangEditor";
    import i18next from 'i18next';
    let _richtext;
    onMounted(() => {
        _richtext = new WangEditor(document.getElementById('richtextEditor'));
        _richtext.config.zIndex = 1;
        // needs plugin i18next
        _richtext.i18next = i18next;
        _richtext.config.lang = 'en';
        _richtext.config.placeholder = '';
        _richtext.create();
    });
    onBeforeUnmount(() => {
        _richtext.destroy();
        _richtext = null;
    });
    const submit = () => {
        const html = _richtext.txt.html();
        // submit
    };
</script>

<script>
    export default {
        name: 'RichText'
    }
</script>

<template>
    <div>
        <div id="richtextEditor" class="mt30">
        </div>

        <el-button class="mt30" @click="submit">Submit</el-button>
    </div>
</template>

<style scoped lang="scss">
    .mt30 {
        margin-top: 30px;
    }
</style>
