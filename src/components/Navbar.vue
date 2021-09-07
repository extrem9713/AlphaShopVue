<template>
  <div>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <nav class="d-flex justify-content-between align-items-center header-nav">
      <div class="nav-left">
        <ul class="nav-list d-flex flex-row">
          <li class="nav-item"><router-link class="nav-link" to="/">男裝</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">女裝</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">最新消息</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">客製商品</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">聯絡我們</router-link></li>
        </ul>
      </div>
      <div class="nav-mid">
        <router-link to="/" class="text-center"
          ><img src="./../assets/AClogo.png"
        /></router-link>
      </div>
      <div class="nav-right">
        <ul class="nav-list d-flex flex-row">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><i class="fas fa-search"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"
              ><i class="fas fa-shopping-cart"> </i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"><i class="far fa-moon"></i></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <label class="navbar-toggle-label" for="navbar-toggle">
      <span class="hamburger"><i class="fas fa-bars"></i></span>
      <span class="hamburger-logo"
        ><img src="https://i.ibb.co/K6qCSys/aclogo.png"
      /></span>
    </label>
  </div>
</template>