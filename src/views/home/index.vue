<script setup>
    import {mockAPI} from "@/api";

    mockAPI().then(_ => {
    }).catch(err => console.error(err));
</script>

<template>
    <div id='appHome' class="background-image-wrap">
        <div class="home-wrap">
            <h1>Welcome To VueTemplate System !</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "@/styles/theme.scss";
    .home-wrap {
        position: absolute;
        top: 100px;
        left: 100px;
        color: $systemTheme;
    }
</style>
