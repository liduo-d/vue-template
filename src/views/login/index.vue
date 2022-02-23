<script setup>
    import {ref, reactive} from 'vue';
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const loginForm = reactive({
        username: 'admin',
        password: 'admin-password'
    });
    const loginRule = {
        username: [
            {
                required: true,
                message: 'Please input username',
                trigger: 'blur'
            }],
        password: [
            {
                required: true,
                message: 'Please input password',
                trigger: 'blur'
            }]
    };
    const loginRef = ref(null);
    const login = () => {
        if (!loginRef.value) return;
        loginRef.value.validate(valid => {
            if (valid) {
                localStorage.setItem('d-username', loginForm.username);
                router.push('/');
            } else
                return false;
        })
    };
</script>

<template>
    <div id="app_login" class="background-image-wrap flex-all-center">
        <div class="login-wrap flex-col">
            <div class="login-title">LOGIN</div>
            <el-form ref="loginRef"
                     :model="loginForm"
                     :rules="loginRule"
                     label-width="88px"
                     class="login-form">
                <el-form-item label="Username" prop="username">
                    <el-input v-model="loginForm.username" :maxlength="30">
                        <template #prepend>
                            <el-icon>
                                <avatar/>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="loginForm.password" type="password" :maxlength="30" show-password>
                        <template #prepend>
                            <el-icon>
                                <lock/>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div>
                <el-button class="login-button" style="width: 99%" @click="login">Login</el-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "@/styles/theme";

    .login-wrap {
        width: 22%;
        min-width: 400px;
        background-color: $systemTheme;
        padding: 35px;
        border-radius: 15px;

        .login-title {
            text-align: center;
            font-weight: bold;
            font-size: 22px;
            padding-bottom: 30px;
        }

        .login-button {
            font-size: 16px;
            letter-spacing: 1.5px;
        }
    }
</style>

