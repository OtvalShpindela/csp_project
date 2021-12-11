<template>
  <header class="header">
    <div class="container">
      <a href="index.php">
        <img class="header_logo" src="@/assets/img/logo.svg" />
      </a>
      <a href="#">
        <div class="header_log">
          <div class="header_login"></div>
        </div>
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 135px;
  background-color: black;
  position: relative;
  align-items: center;
  display: flex;
}

.header_log {
  float: right;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: white;
}

.header_login {
  background: url("../assets/img/login_icon_white.svg") center;
  -webkit-background-size: cover;
  width: 74px;
  height: 74px;
  border-radius: 50px;
}

.header_login:hover {
  background: url("../assets/img/login_icon_black.svg");
  transition: 0.5s;
}

.header_logo {
  width: 132px;
  height: 114px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  margin: auto;
}
</style>
