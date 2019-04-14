<template>
  <div class="loginCon" :style="{width:curWidth+'px',height:curHeight+'px'}">
    <img class="loginBac" src="../../image/1datu.jpg">
    <div class="loginBox">
      <div class="username">
        <img src="../../image/1tubiao1.jpg">
        <input type="username" placeholder="请输入工号" v-model="username">
      </div>
      <div class="password">
        <img src="../../image/1tubiao.jpg">
        <input type="password" placeholder="请输入密码" v-model="password">
        <div class="forget">忘记密码?</div>
      </div>
    </div>
    <div class="loginButton" @click="login">登录</div>
    <div class="footerBox">
      <div>
        <img src="../../image/xiandaiZY.jpg">
      </div>
      <div>
        <img src="../../image/tubiao3.png">
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import Message from 'iview';

export default {
  data() {
    return {
      curHeight: 0,
      curWidth: 0,
      username: "",
      password: ""
    };
  },
  beforeMount() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight = h; //减去页面上固定高度height
    this.curWidth = w;
  },
  methods: {
    login() {
      if (this.username === "") {
        this.$Message.warning({
          content: "用户名不能为空！",
          duration: 2
        });
        return;
      } else if (this.password === "") {
        this.$Message.warning({
          content: "密码不能为空！",
          duration: 2
        });
        return;
      }
      let url = "http://123.56.185.81:8082/login";
      let params = `username=${this.username}&password=${this.password}`;
      axios
        .post(url, params)
        .then(rsponse => {
          let data = rsponse.data;
          if (rsponse.status === 200 && rsponse.data) {
            if (rsponse.data.success) {
              this.$store.state.isLogin = true;
              this.$Message.info({
                content: "登录成功",
                duration: 2
              });
              this.$router.push({ path: "/" });
            } else {
              this.$Message.error({
                content: "账号或密码错误，请重新登录！",
                duration: 2
              });
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.loginCon {
  display: flex;
  flex-direction: column;
}
.loginBac {
  width: 100%;
}
.loginBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 5%;
  padding: 5% 3%;
  box-shadow: 0 10px 10px #999;
  border-radius: 10px;
  position: relative;
  top: -8%;
  background-color: white;
}
.loginBox input {
  border: none;
  outline: none;
  line-height: 20px;
  padding: 0 5%;
  font-size: 18px;
}
.loginBox img {
  width: 18px;
  height: 20px;
}
.username,
.password {
  display: flex;
  justify-content: center;
  align-items: center;
}
.username {
  padding-bottom: 5%;
}
.forget {
  position: absolute;
  right: 3%;
  background-color: #fa0314;
  color: white;
  padding: 1% 3%;
  border-radius: 20px;
  font-size: 18px;
}
.loginButton {
  margin: 0 10%;
  padding: 2% 0;
  background-color: #0136df;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.footerBox {
  flex: 1;
  margin: 15% 5% 2%;
  border-top: 1px solid #a5a5a5;
  position: relative;
}
.footerBox::before {
  position: absolute;
  top: -10%;
  font-size: 16px;
  color: black;
  font-weight: bold;
  content: "中药配方颗粒云学堂";
  padding: 0 5%;
  background-color: white;
}
.footerBox::after {
  position: absolute;
  bottom: 0;
  content: "先健企业管理咨询（上海）有限公司制作课程&技术支持";
  font-size: 12px;
  color: #5b5b5b;
  padding: 0 5%;
  background-color: white;
}
.footerBox,
.footerBox div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footerBox img {
  width: 60%;
}
</style>
