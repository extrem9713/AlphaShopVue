<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <!--結帳主頁面步驟一-->
          <div class="part">
            <h2>寄送地址</h2>
            <div class="full-name">
              <!--稱謂-->
              <div class="form-row gender">
                <label>稱謂</label>
                <div class="select-wrapper">
                  <select
                    name="a-type"
                    id="a-type"
                    v-model="user.gender"
                    required
                  >
                    <option value="先生">先生</option>
                    <option value="小姐">小姐</option>                    
                  </select>
                </div>
              </div>
              <!--姓名-->
              <div class="form-row name">
                <label for="">姓名</label>
                <input
                  id="name"
                  type="text"
                  placeholder="請輸入姓名"
                  v-model="user.name"
                />
              </div>
            </div>
            <div class="cotact-info">
              <!--電話-->
              <div class="form-row phone">
                <label for="">電話</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="請輸入行動電話"
                  v-model="user.tel"
                />
              </div>
              <!--email-->
              <div class="form-row email">
                <label for="">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="請輸入電子郵件"
                  v-model="user.email"
                />
              </div>
            </div>
            <div class="location-name">
              <!--縣市-->
              <div class="form-row city">
                <label>縣市</label>
                <div class="select-wrapper">
                  <select
                    name="a-type"
                    id="a-type"
                    v-model="user.city"
                    required
                  >
                    <option value="man" disabled selected>請選擇縣市</option>
                    <option
                      v-for="city in cities"
                      :key="city.id"
                      :value="city.name"
                    >
                      {{ city.name }}
                    </option>
                  </select>
                </div>
              </div>
              <!--地址-->
              <div class="form-row address">
                <label for="">地址</label>
                <input
                  id="name"
                  type="text"
                  placeholder="請輸入地址"
                  v-model="user.address"
                />
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <!--按鈕-->
        <div id="btn-control" class="control-panel">
          <button disabled class="btn btn-outline d-none"></button>
          <button
            type="submit"
            class="btn btn-primary ml-4"
            @click.stop.prevent="NextStep"
          >
            下一步 <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import Swal from 'sweetalert2'
export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        id: "",
      }),
    },
  },
  data() {
    return {
      cities: [
        { name: "基隆市", id: "1" },
        { name: "台北市", id: "2" },
        { name: "新北市", id: "3" },
        { name: "桃園市", id: "4" },
        { name: "新竹市", id: "5" },
        { name: "新竹縣", id: "6" },
        { name: "苗栗市", id: "7" },
        { name: "台中市", id: "8" },
        { name: "彰化縣", id: "9" },
        { name: "南投縣", id: "10" },
        { name: "雲林縣", id: "11" },
        { name: "嘉義市", id: "12" },
        { name: "嘉義縣", id: "13" },
        { name: "台南市", id: "14" },
        { name: "高雄市", id: "15" },
        { name: "屏東縣", id: "16" },
        { name: "台東縣", id: "18" },
        { name: "花蓮縣", id: "19" },
        { name: "宜蘭縣", id: "20" }  
      ],
      user: this.initialUser,     
    };
  },
  methods: {
    NextStep() {
      //console.log(this.receiverInfo)
      const { gender, name, tel, email, city, address, id } = this.user;
      if (!gender || !name || !tel || !email || !city || !address || !id) {
        Swal.fire({
          title: "注意！", 
          text: "請確認所有欄位皆已填寫", 
          icon: 'warning',
          confirmButtonColor: '#f67599'});
        return;
      }
      this.$emit("step-after-submit");
      this.$router.push({ name: 'delivery'})
    },
  },
};
</script>