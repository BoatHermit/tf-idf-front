<template>
  <el-dialog title="计算结果" :visible="visible" @update:visible="$emit('update:visible', $event)">
    <!--<div>-->
    <!--  <p class="section-title">AP 列表</p>-->
    <!--  <el-table :data="calculationResults.apResults" border>-->
    <!--    <el-table-column prop="id" label="ID" width="80"></el-table-column>-->
    <!--    <el-table-column prop="title" label="标题"></el-table-column>-->
    <!--    <el-table-column prop="ap" label="AP"></el-table-column>-->
    <!--  </el-table>-->
    <!--</div>-->

    <!-- AP 和 MAP -->
    <div class="section">
      <div class="result">
        <p class="label">AP:</p>
        <p class="value">{{ calculationResults.apOverallResult }}</p>
      </div>

      <div class="result">
        <p class="label">MAP:</p>
        <p class="value">{{ calculationResults.mapOverallResult }}</p>
      </div>
    </div>


  </el-dialog>

</template>

<script>

import {getAllExternal, getAllInternal, getAP, getMAP, getSimilarityById} from "@/network/main";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      calculationResults: {
        type: Object,
        default: () => {},
      },
    };
  },
  mounted() {
    // 在组件挂载到 DOM 后执行的方法
    // 此时弹窗已经显示
    this.updateData();
  },
  methods: {
    updateVisible(value) {
      this.$emit('update:dialogVisible', value);
    },

    async updateData() {
      // 根据选中的行更新相似度数据
      // 示例：根据 selectedRow 进行计算并更新 this.manualAnnotationData 和 this.vsmResultsData
      // console.log(1)
      await getAP().then(_res => {
        // console.log(_res.data)
        this.calculationResults.apOverallResult = _res.data;
      });
      await getMAP().then(_res => {
        console.log("map" + _res.data)
        this.calculationResults.mapOverallResult = _res.data;
      });
    },
  },
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
}

.result {
  margin: 0; /* 移除结果容器的默认上下边距 */
  display: flex;
}

.label {
  width: 25%; /* 标签占1/4宽度 */
  font-weight: bold;
}

.value {
  width: 75%; /* 数据占3/4宽度 */
}

</style>

