<template>
  <main id="main-content">
    
   <Header />
    
    <div class="container main-container">
      

      <div class="main-grid">
        
        <div class="left-content">
         <header />
          <StepPanel :formStep="user.formStep" />

          
          <router-view
            :initial-user="user"
            @step-after-submit="stepAfterSubmit"
            @step-before-submit="stepBeforeSubmit"
            @final-step-submit="finalStepSubmit"
          />
          
        </div>
        
        <div class="right-content">
          <ShoppingCartPanel
            :initial-items="items"
            :delivery="user.delivery"
            :initialTotleCost="user.totleCost"
            @totle-Cost-Update="totleCostUpdate"
            @delete-item="deleteItem"
          />
        </div>
      </div>
    </div>

    
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue"
import StepPanel from "../components/StepPanel.vue"
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue"
import Footer from "../components/Footer.vue"
const STORAGE_KEY = "alpha-shop-vue"
const STORAGE_ITEM = "alpha-shop-item-vue"
export default {
  components: {
    Header,
    StepPanel,   
    ShoppingCartPanel,    
    Footer    
  },
  data() {
    return {
      user: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        id: -1,
        delivery: 0,
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
        formStep: "",
        totleCost: 0,
      },
      items: [
        {
          name: "破洞補釘牛仔褲",
          img: "https://i.ibb.co/vXLmvf0/1.jpg",
          amount: 1,
          price: 3999,
          id: 1,
        },
        {
          name: "刷色直筒牛仔褲",
          img: "https://i.ibb.co/qYnKGs7/2.jpg",
          amount: 1,
          price: 1299,
          id: 2,
        },
      ],
      finishedCheckOut: false,
    };
  },
  methods: {
    startFormStep() {
      if (this.$route.name === "address") {
        this.user.formStep = 1;
      } else if (this.$route.name === "delivery") {
        this.user.formStep = 2;
      } else if (this.$route.name === "payment") {
        this.user.formStep = 3;
      }
    },
    stepAfterSubmit() {
      this.user.formStep += 1;
    },
    stepBeforeSubmit() {
      this.user.formStep -= 1;
    },
    totleCostUpdate(payment) {
      this.user.totleCost = payment.newtotleCost;
    },
    deleteItem(payment) {
      this.items = payment.newItem;
    },
    finalStepSubmit() {
      console.log(this.user);
      this.finishedCheckOut = !this.finishedCheckOut;
    },
    createStorageData() {
      this.user = {
        ...this.user,
        ...JSON.parse(localStorage.getItem(STORAGE_KEY)),
      };
      this.items = JSON.parse(localStorage.getItem(STORAGE_ITEM)) || this.items;
    },
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user));
      localStorage.setItem(STORAGE_ITEM, JSON.stringify(this.items));
    },
  },
  created() {
    this.createStorageData();
    this.startFormStep();
  },
  updated() {
    this.startFormStep();
  },
  watch: {
    user: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
};
</script>