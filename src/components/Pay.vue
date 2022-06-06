<template>
  <div class="pay-container">
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="{ span: 20, offset: 2 }"
        :md="{ span: 20, offset: 2 }"
        :lg="{ span: 14, offset: 5 }"
        :xl="{ span: 12, offset: 6 }"
      >
        <el-steps :space="200" :active="active" align-center class="steps">
          <el-step title="填写转账信息"></el-step>
          <el-step title="确认转账信息"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <Step1
          v-if="active === 1"
          :price="price"
          @change-step="handleSetStep"
        ></Step1>
        <Step2
          v-if="active === 2"
          :info-data="form"
          @change-step="handleSetStep"
        ></Step2>
        <Step3
          v-if="active === 3"
          :info-data="form"
          @change-step="handleSetStep"
        ></Step3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";

export default {
  name: "Pay",
  components: { Step1, Step2, Step3 },
  props: {
    price: { type: Number, required: true },
  },
  data() {
    return {
      active: 1,
      form: {},
    };
  },
  methods: {
    handleSetStep(active, form) {
      this.active = active;
      if (form) this.form = Object.assign(this.form, form);
      console.log(this, "---");
    },
  },
};
</script>
<style scoped>
.steps {
  justify-content: center;
  margin-bottom: 20px;
}
</style>
