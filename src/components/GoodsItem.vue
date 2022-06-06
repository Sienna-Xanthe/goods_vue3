<template>
  <div class="goodsItem" @click="handleGoodItem(item.id)">
    <div class="img">
      <img class="img1" :src="item.imgUrl" alt="picture" />
    </div>
    <div class="title">{{ item.name }}</div>
    <div class="price">
      ￥ <span class="price1">{{ item.newPrice }}.00</span>
    </div>
  </div>
  <div v-if="visible">
    <el-dialog v-model="visible" :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">请确认付款信息</h4>
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            取消
          </el-button>
        </div>
      </template>
      <div>{{ item.name }}</div>
      <div class="price">
        ￥ <span class="price1">{{ item.newPrice }}.00</span>
      </div>
      <Pay :price="Number(item.newPrice)"></Pay>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { CircleCloseFilled } from "@element-plus/icons-vue";
import Pay from "./Pay.vue";
export default {
  components: { CircleCloseFilled, Pay },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const visible = ref(false);
    const handleGoodItem = (id) => {
      visible.value = true;
      console.log(id);
    };
    return {
      handleGoodItem,
      visible,
    };
  },
};
</script>

<style scoped>
.goodsItem {
  width: 190px;
  height: 252px;
  margin: 10px;
  padding: 30px 20px 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
.img {
  width: 190px;
  height: 150px;
  overflow: hidden;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-around;
}
.img1 {
  width: 150px;
}
.title {
  width: 190px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 13px;
}
.price {
  color: red;
}
.price1 {
  margin: 0 5px 0 0;
  font-size: 22px;
  line-height: 23px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
}
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
