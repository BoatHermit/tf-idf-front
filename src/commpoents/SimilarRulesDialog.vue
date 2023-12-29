<template>
  <el-dialog title="计算相似内规" :visible="visible" @update:visible="$emit('update:visible', $event)">
    <!-- 信息表 -->
    <div class="info-container">
      <div class="info-item">
        <span>ID:</span>
        <span>{{ selectedRow.id }}</span>
      </div>
      <div class="info-item">
        <span>标题:</span>
        <span>{{ selectedRow.title }}</span>
      </div>
    </div>

    <!-- 标签页 -->
    <el-tabs v-model="dialogActiveTab" class="tabs-container">
      <el-tab-pane label="人工标注" name="manualAnnotation">
        <el-table :data="manualAnnotationData" style="width: 100%" stripe>
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="similarity" label="相似度"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="VSM结果" name="vsmResults">
        <el-table :data="vsmResultsData" style="width: 100%" stripe>
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="similarity" label="相似度"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>

</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    selectedRow: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      dialogActiveTab: 'manualAnnotation',
      manualAnnotationData: [
        // 人工标注数据
      ],
      vsmResultsData: [
        // VSM结果数据
      ],
    };
  },
  watch: {
    selectedRow(newValue) {
      // 当选中行发生变化时，更新相似度数据
      this.updateSimilarityData(newValue);
    },
  },
  methods: {
    updateVisible(value) {
      this.$emit('update:dialogVisible', value);
    },

    updateSimilarityData(selectedRow) {
      // 根据选中的行更新相似度数据
      // 示例：根据 selectedRow 进行计算并更新 this.manualAnnotationData 和 this.vsmResultsData
    },
  },
};
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
}

.info-item {
  display: flex;
  align-items: baseline; /* 上下对齐 */
  margin-bottom: 10px;
}

.info-item span {
  margin-right: 10px;
  font-weight: bold;
}
</style>