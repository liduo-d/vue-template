<script setup>
    import {reactive, ref} from 'vue';

    const formData = reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    });

    const rules = {
        name: [
            {
                required: true,
                message: 'Please input Activity name',
                trigger: 'blur',
            },
            {
                min: 3,
                max: 5,
                message: 'Length should be 3 to 5',
                trigger: 'blur',
            },
        ],
        region: [
            {
                required: true,
                message: 'Please select Activity zone',
                trigger: 'change',
            },
        ],
        date1: [
            {
                type: 'date',
                required: true,
                message: 'Please pick a date',
                trigger: 'change',
            },
        ],
        date2: [
            {
                type: 'date',
                required: true,
                message: 'Please pick a time',
                trigger: 'change',
            },
        ],
        type: [
            {
                type: 'array',
                required: true,
                message: 'Please select at least one activity type',
                trigger: 'change',
            },
        ],
        resource: [
            {
                required: true,
                message: 'Please select activity resource',
                trigger: 'change',
            },
        ],
        desc: [
            {
                required: true,
                message: 'Please input activity form',
                trigger: 'blur',
            },
        ],
    };

    const formRef = ref(null);

    const submitForm = formEl => {
        if (!formEl) return;
        formEl.validate((valid) => {
            if (valid) {
                // submit
            } else {
                return false;
            }
        })
    };

    const resetForm = formEl => {
        if (!formEl) return;
        formEl.resetFields();
    }

</script>

<script>
    export default {
        name: 'BaseForm'
    }
</script>

<template>
    <div>
        <el-form
                ref="formRef"
                :model="formData"
                :rules="rules"
                label-width="120px">
            <el-form-item label="Activity name" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone" prop="region">
                <el-select v-model="formData.region" placeholder="Activity zone">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker
                                v-model="formData.date1"
                                type="date"
                                placeholder="Pick a date"
                                style="width: 100%"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col style="text-align: center;" :span="2">
                    <span>-</span>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker
                                v-model="formData.date2"
                                placeholder="Pick a time"
                                style="width: 100%"
                        ></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery" prop="delivery">
                <el-switch v-model="formData.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="Activity type" prop="type">
                <el-checkbox-group v-model="formData.type">
                    <el-checkbox label="Online activities" name="type"></el-checkbox>
                    <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                    <el-checkbox label="Offline activities" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources" prop="resource">
                <el-radio-group v-model="formData.resource">
                    <el-radio label="Sponsorship"></el-radio>
                    <el-radio label="Venue"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form" prop="desc">
                <el-input v-model="formData.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(formRef)"
                >Create</el-button
                >
                <el-button @click="resetForm(formRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>

</style>

