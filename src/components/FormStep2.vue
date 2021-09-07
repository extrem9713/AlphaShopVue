<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <!--結帳主頁面-左側-步驟二-->
          <div class="part" id="delivery">
            <h2>運送方式</h2>
            <!--結帳主頁面-左側-運送方式選項一-->
            <div class="form-row delivery-way">
              <div class="delivery d-flex align-items-center">
                <input
                  name="fee"
                  type="radio"
                  value= 0
                  class="free"
                  v-model="user.delivery"
                />
                <label for="">
                  <div class="delivery-title">
                    <div class="title">標準運送</div>
                    <div class="cost">免費</div>
                  </div>
                  <div class="description">約3-4個工作天</div>
                </label>
              </div>
            </div>
            <!--結帳主頁面-左側-運送方式選項二-->
            <div class="form-row">
              <div class="delivery d-flex align-items-center">
                <input
                  name="fee"
                  type="radio"
                  value= 500
                  class="fee"
                  v-model="user.delivery"
                />
                <label for="">
                  <div class="delivery-title">
                    <div class="title">DHL貨運</div>
                    <div class="cost">$500</div>
                  </div>
                  <div class="description">48小時內送達</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!--按鈕-->
        <div id="btn-control" class="control-panel">
          <button class="btn btn-outline" @click.stop.prevent="ReturnStep">
            <i class="fas fa-arrow-left"></i> 
            上一步
          </button>
          <button class="btn btn-primary ml-4" @click.stop.prevent="NextStep">
            下一步 <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
//import Swal from "sweetalert2";
export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        delivery: 0,
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    NextStep() {
      this.$emit("step-after-submit");
      this.$router.push({ name: "payment" });
    },
    ReturnStep() {
      this.$emit("step-before-submit");
      this.$router.push({ name: "address" });
    },
  },
};
</script>