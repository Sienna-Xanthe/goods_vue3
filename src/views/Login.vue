<template>
  <div class="login">
    <el-card class="card-box">
      <el-form v-if="isLogin" v-model="userinfo">
        <el-form-item label="账号">
          <el-input v-model="userinfo.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="userinfo.password" />
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
      <div v-else>
        <span class="name">用户名：{{ userinfo.name }}</span>
        <el-button type="primary" @click="handleLogout">退出登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";
import { login } from "../api/api";
export default {
  setup() {
    let isLogin = ref(true);
    if (sessionStorage.getItem("token")) {
      isLogin.value = false;
    }
    const userinfo = reactive({
      name: "",
      password: "",
    });
    const handleLogin = () => {
      login(userinfo)
        .then((result) => {
          sessionStorage.setItem("token", window.btoa(result.data.token));
          if (result.data) {
            ElNotification({
              title: "Success",
              message: "登录成功",
              type: "success",
            });
            isLogin.value = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const handleLogout = () => {
      isLogin.value = true;
    };
    return {
      isLogin,
      userinfo,
      handleLogin,
      handleLogout,
    };
  },
};
</script>

<style scoped>
.el-form {
  padding: 20px;
}
.el-button {
  width: 300px;
}
.login {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.card-box {
  display: flex;
  justify-content: space-around;
  width: 90%;
}
.btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.name {
  font-size: 18px;
  margin: 15px;
}
</style>
