<script setup>
    import {ref} from 'vue';
    import {ElMessage} from 'element-plus';
    import VueCropper from "vue-cropperjs";
    import "cropperjs/dist/cropper.css";

    const handleHttpRequest = () => {
        return;
    };

    const cropperRef = ref(null);
    const imgSrc = ref('');
    const originImgSrc = ref('');

    const handleUpload = file => {
        if (!file.type.includes("image/")) {
            ElMessage.error('File type should be an image');
            return;
        }
        const reader = new FileReader();
        reader.onload = event => {
            imgSrc.value = event.target.result;
            originImgSrc.value = event.target.result;
            cropperRef.value && cropperRef.value.replace(imgSrc.value);
        };
        reader.readAsDataURL(file);
    };


    const cropImage = () => {
        imgSrc.value = cropperRef.value.getCroppedCanvas().toDataURL();
    };

</script>

<script>
    export default {
        name: 'Cropper'
    }
</script>

<template>
    <div>
        <el-upload
                action="#"
                :show-file-list="false"
                :http-request="handleHttpRequest"
                :before-upload="handleUpload">
            <el-button> Select Picture</el-button>
        </el-upload>

        <el-divider></el-divider>

        <div class="flex-row-between">
            <img alt="originPicture" :src="originImgSrc" style="width: 200px"/>

            <vue-cropper ref="cropperRef" :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage"
                         style="width: 33%; height: 300px;"></vue-cropper>

            <img alt="cropperPicture" :src="imgSrc" style="width: 200px"/>
        </div>
    </div>
</template>

<style scoped>

</style>
