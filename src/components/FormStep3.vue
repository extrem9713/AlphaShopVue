<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <!--結帳主頁面-左側-步驟三-->
          <div class="part">
            <h2>付款資訊</h2>
            <!--持卡人姓名-->
            <div class="form-row card-name">
              <label for="">持卡人姓名</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                v-model="user.payerName"
              />
            </div>
            <!--卡號-->
            <div class="form-row card-number">
              <label for="">卡號</label>
              <input
                id="name"
                type="text"
                placeholder="1111 2222 3333 4444"
                v-model="user.cardNumber"
              />
            </div>
            <div class="date-cvc">
              <!--有效日期-->
              <div class="form-row date">
                <label for="">有效日期</label>
                <input
                  id="name"
                  type="text"
                  placeholder="MM/YY"
                  v-model="user.goodThru"
                />
              </div>
              <!--CVC/CCV-->
              <div class="form-row CVC">
                <label for="">CVC/CCV</label>
                <input
                  id="name"
                  type="text"
                  placeholder="123"
                  v-model="user.CVC"
                />
              </div>
            </div>
          </div>
        </div>
        <!--按鈕-->
        <div id="btn-control" class="control-panel">
          <button class="btn btn-outline" @click.stop.prevent="ReturnStep">
            <i class="fas fa-arrow-left"></i> 上一步
          </button>
          <button class="btn btn-primary ml-4" @click.stop.prevent="FinalStep">
            確認下單 <i class="fas fa-check-circle"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>





<script>
import Swal from "sweetalert2";
export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    FinalStep() {
      //console.log(this.receiverInfo)
      const { payerName, cardNumber, goodThru, CVC } = this.user;
      if (!payerName || !cardNumber || !goodThru || !CVC) {
        Swal.fire({
          title: "注意！",
          text: "請確認所有欄位皆已填寫!",
          icon: "warning",
          confirmButtonColor: "#f67599",
        });
        return;
      }
      this.$emit("final-step-submit");
    },
    ReturnStep() {
      this.$emit("step-before-submit");
      this.$router.push({ name: "delivery" });
    },
  },
};
</script>