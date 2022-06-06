<template>
  <div class="home">
    <div v-if="isLogin" class="homeData">
      <template v-for="item in dataList" :key="item.id">
        <GoodsItem :item="item"></GoodsItem>
      </template>
    </div>
    <div v-else>
      <div>请先到 “我的” 进行登录哦~</div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { getGoodsList } from "../api/api";
import GoodsItem from "../components/GoodsItem.vue";
export default {
  components: { GoodsItem },
  setup() {
    var dataList = ref([]);
    let isLogin = ref(false);
    getGoodsList()
      .then((result) => {
        isLogin.value = true;
        dataList.value = [...result.data.list].splice(0, 8);
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      dataList,
      isLogin,
    };
  },
};
</script>
<style scoped>
.homeData {
  display: flex;
  flex-wrap: wrap;
}
</style>
