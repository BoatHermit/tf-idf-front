<template>
  <el-dialog title="计算结果" :visible="visible" @update:visible="$emit('update:visible', $event)">
    <div>
      <p class="section-title">AP 列表</p>
      <el-table :data="calculationResults.apResults" border>
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="ap" label="AP"></el-table-column>
      </el-table>
    </div>

    <div class="section">
      <p class="section-title">AP:</p>
      <p>{{ calculationResults.apOverallResult }}</p>
    </div>

    <div class="section">
      <p class="section-title">MAP:</p>
      <p>{{ calculationResults.mapOverallResult }}</p>
    </div>
  </el-dialog>

</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    calculationResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
  .section-title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .section {
    margin-top: 15px;
  }
</style>

