<template>
  <div class="card list-container">
    <h4 class="shopping-car">購物車</h4>
    
    <div class="shoppimg-list">
      <div class="item" v-for="item in items" :key="item.id">
        <div class="item-img" id="item-1-img">
          <img :src="item.img" />
        </div>
        <div class="count-panel">
          <div class="item-part">
            <p class="item-name">{{ item.name }}</p>
            <div class="count">
              <div
                class="reduce-circle"
                @click.stop.prevent="deleteAmount(item)"
              ></div>
              <div class="item-num">{{ item.amount }}</div>
              <div
                class="add-circle"
                @click.stop.prevent="addAmount(item)"
              ></div>
            </div>
          </div>
          <div class="item-cost">${{ item.price }}</div>
        </div>
      </div>
    </div>
    <!--結帳主頁面-右側-購物花費-->
    <div class="cal">
      <div class="fee">
        <span class="fee-title">運費</span>
        <span class="fee-cost">
          {{ delivery === 0 ? "免運費" : "$" + delivery }}</span
        >
      </div>
      <div class="sum">
        <span class="sum-title">小計</span>
        <span class="sum-cost">${{ totleCost }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  props: {
    initialItems: {
      type: Array,
      required: true,
    },
    delivery: {
      required: true,
    },
  },
  data() {
    return {
      items: this.initialItems,
      totleCost: 0,
    };
  },
  methods: {
    addAmount(item) {
      item.amount += 1;
    },
    deleteAmount(item) {
      if (item.amount === 1) {
        Swal.fire({
          title: "商品將移除",
          text: "確定將此商品移除購物車",
          icon: "warning",
          showCancelButton: true,
          CancelButtonText: "取消",
          confirmButtonColor: "#808080",
          cancelButtonColor: "#2a2a2a",          
          confirmButtonText: "確認",
        }).then((result) => {
          if (result.isConfirmed) {
            this.items = this.items.filter((_item) => _item.id !== item.id);
            this.$emit("delete-item",{newItem: this.items})
          }
        });
        return;
      }
      item.amount -= 1;
    },
    totleCostChange() {
      this.totleCost = 0;
      this.items.map((item) => {
        const itemCost = item.amount * item.price;
        this.totleCost += itemCost;
      });
      this.totleCost += Number(this.delivery)
      this.$emit("totle-Cost-Update",{newtotleCost: this.totleCost});
    },
  },
  watch: {
    items: {
      handler: function () {
        this.totleCostChange();
      },
      immediate: true,
      deep: true,
    },
    delivery: {
      handler: function () {
        this.totleCostChange();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>