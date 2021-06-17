<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex justify-content-start">
        <router-link :to="{ name: 'Home' }" class="navbar-brand logo ms-1"></router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'MyPage' }" class="nav-link">투자내역</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
  nav {
      font-family: Noto Sans KR,sans-serif,AppleSDGothicNeo-Regular,Malgun Gothic,Dotum;
      overflow: visible;
      background: none;
      background-color: #093687;
      height: 60px;
  }

  .logo {
      width: 77px;
      height: 17px;
      background: transparent url(https://cdn.upbit.com/images/logo_upbit_sub.4d84cc7.svg) no-repeat 0 0;
      text-indent: -1000em;
      display: inline-block;
  }

  .nav-link {
    color: white;
  }
</style>
