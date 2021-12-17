<template>
    <div class="container">
        <div class="welcome_block">
            <div class="login_border">
                <div class="login_block">
                    <div class="login_content">
                        <p class="welcome">Добро пожаловать!</p>
                        <div class="your_login">
                            <input 
                                v-bind:value="login" 
                                @input="login = $event.target.value"
                                class="login_text" 
                                placeholder="Ваш логин" 
                                type="text"
                            >
                        </div>
                        <div class="your_login">
                            <input 
                                v-bind:value="password"
                                @input="password = $event.target.value" 
                                class="login_text" 
                                placeholder="Ваш пароль" 
                                type="text"
                            >
                        </div>
                        <button @click="loginCheck" class="login_enter" >
                            <div>Войти</div>
                        </button>
                        <a class="forgot_pass_btn" href="">
                            <p class="forgot_pass">Забыли пароль?</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            login: "",
            password: ""
        }
    },
    methods: {
        loginCheck() {
            
            
        }
    }
}
</script>

<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.welcome_block {
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_border {
  background: white;
  width: 960px;
  height: 485px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_block {
  background: black;
  width: 930px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_content {
  width: 435px;
  height: 380px;
  text-align: center;
}

.forgot_pass {
  font-size: 20px;
  color: white;
}

.forgot_pass_btn {
  text-decoration: none;
}

.welcome {
  font-size: 36px;
  color: white;
  margin-bottom: 50px;
}

.login_btn {
  text-decoration: none;
}

.login_enter {
  margin: 0 auto;
  margin-bottom: 27px;
  color: black;
  width: 265px;
  height: 45px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: 0.5s;
}

.login_enter:hover {
  color: white;
  background: black;
}

.your_login {
  width: 435px;
  height: 60px;
  background: white;
  margin-bottom: 26px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.login_text {
  color: black;
  margin-left: 10px;
  border-radius: 10px;
  float: left;
  border: none;
  outline: none;
  padding: 0;
  font-size: 24px;
  width: 400px;
}
</style>