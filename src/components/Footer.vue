<template>
  <div class="footer">
    <div class="container footer-content">
      <div class="logo"><img src="./../assets/AClogo.png" /></div>
      <div class="nav">
        客戶服務
        <ul class="nav-list d-flex flex-column">
          <li class="nav-item"><router-link class="nav-link" to="/">運送說明</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">退換貨說明</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">付款資訊</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/">FAQ</router-link></li>
        </ul>
      </div>
      <div class="nav">
        關於我們
        <ul class="nav-list d-flex flex-column">
          <li class="nav-item"><router-link class="nav-link" to="">品牌故事</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="">媒體連繫</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="">Press kit</router-link></li>
        </ul>
      </div>
      <div class="nav">
        資訊
        <ul class="nav-list d-flex flex-column">
          <li class="nav-item"><router-link class="nav-link" to="/">隱私權政策</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="">Cookie</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="">GDPR</router-link></li>
        </ul>
      </div>
      <div class="nav">
        追蹤 ALPHA SHOP
        <ul class="nav-list d-flex flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="">+886 02123-45678</router-link>
          </li>
          <div class="contact d-flex flex-row">
            <li class="nav-item">
              <router-link class="nav-link" to=""><i class="fab fa-facebook-f"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to=""><i class="fab fa-instagram"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to=""><i class="fab fa-whatsapp"></i></router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>