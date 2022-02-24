<template>
  <div>
    <div class="ops-tabs">
      <h1 class="tabs-1">丧葬服务一条龙</h1>
      <div class="tabs-2">后台管理系统</div>
    </div>
    <div class="loginBg">
        <UserLogin/>
      <!-- <div class="loginfrom">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
          <el-button
            type="primary"
            @click="getVerify"
            style="width: 175px"
            :disabled="(disabled = !show)"
          >
            <span v-show="show">获取验证码</span>
            <span v-show="!show" class="count">{{ count }} s</span>
          </el-button>
        </el-form>
      </div> -->
    </div>
  </div>
</template>

<script>
import UserLogin from './UserLogin.vue'

export default {
  name: "LogIn",
  components:{UserLogin},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
    //   show: true,
    //   count: "", // 初始化次数
    //   timer: null,

      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // getVerify() {
    //   // 验证手机号
    //   if (this.checkPhone() == false) {
    //     return false;
    //   } else {
    //     const TIME_COUNT = 60; //更改倒计时时间
    //     if (!this.timer) {
    //       this.count = TIME_COUNT;
    //       this.show = false;
    //       this.timer = setInterval(() => {
    //         if (this.count > 0 && this.count <= TIME_COUNT) {
    //           this.count--;
    //         } else {
    //           this.show = true;
    //           clearInterval(this.timer); // 清除定时器
    //           this.timer = null;
    //         }
    //       }, 1000);
    //     }
    //   }
    // },
    // checkPhone() {
    //   let phone = this.form.phone;
    //   if (!/^1[3456789]\d{9}$/.test(phone)) {
    //     this.$message.error("请填写正确的手机号");
    //     return false;
    //   }
    // },
  },
};
</script>

<style>
.ops-tabs {
  display: flex;
  padding-left: 60px;
  padding-right: 100px;
  line-height: 30px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  height: 50px;
  line-height: 50px;
  background-color: rgb(34, 50, 68);
  /* position: relative; */
  text-align: center;
  position: sticky;
  top: 0px;
  z-index: 2;
}
.tabs-1 {
  flex: 1;
  text-align: left;
}

.tabs-2 {
  flex: 1;
}
.loginBg {
  background: url("../assets/宗教1.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 697px;
  /* margin: 60px 0; */
}
.loginfrom {
  width: 320px;
  height: 500px;
  /* background: rgb(252, 250, 250); */
  position:fixed;
  top: 260px;
  /* right: 550px; */
  right: 40%;
}
.el-form-item--feedback {
  line-height: 45px;
  color: #f5f7fa;
}
</style>