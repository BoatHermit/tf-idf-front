<template>
  <div>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="外规" name="outerRules">
        <!-- 添加计算按钮 -->
        <el-button type="primary" @click="calculateMetrics">计算选中外规的评估指标</el-button>

        <el-row>
          <el-col :span="16">
            <el-table :data="outerRulesData" style="width: 100%" stripe @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="id" label="ID"></el-table-column>
              <el-table-column prop="title" label="外规标题"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="openSimilarRulesDialog(scope.row)">计算相似内规</el-button>
                  <el-button @click="viewOuterRule(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="8">
            <div class="content-container">
              <div v-if="detailedExVisible === false">点击“查看”显示外规内容</div>
              <div v-if="detailedExVisible === true" class="info-container">
                <div class="info-item">
                  <span>ID:</span>
                  <span>{{ detailedExReg.id }}</span>
                </div>
                <div class="info-item">
                  <span>标题:</span>
                  <span>{{ detailedExReg.title }}</span>
                </div>
                <div class="info-item">
                  <span>内容:</span>
                  <span>{{ detailedExReg.content }}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="内规" name="innerRules">
        <el-row>
          <el-col :span="16">
            <el-table :data="innerRulesData" style="width: 100%" stripe>
              <el-table-column prop="id" label="ID"></el-table-column>
              <el-table-column prop="title" label="内规标题"></el-table-column>
              <el-table-column prop="department" label="部门"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="viewInnerRule(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="8">
            <div class="content-container">
              <div v-if="detailedInVisible === false">点击“查看”显示内规内容</div>
              <div v-if="detailedInVisible === true" class="info-container">
                <div class="info-item">
                  <span>ID:</span>
                  <span>{{ detailedInReg.id }}</span>
                </div>
                <div class="info-item">
                  <span>标题:</span>
                  <span>{{ detailedInReg.title }}</span>
                </div>
                <div class="info-item">
                  <span>部门:</span>
                  <span>{{ detailedInReg.department }}</span>
                </div>
                <div class="info-item">
                  <span>内容:</span>
                  <span>{{ detailedInReg.content }}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <!-- 弹窗组件 -->
    <similar-rules-dialog
        :visible="dialogVisible1"
        @update:visible="updateDialogVisible1"
        :selected-row="selectedRow"
    ></similar-rules-dialog>

    <!-- 弹窗组件 -->
    <metrics-result-dialog
        :visible="dialogVisible2"
        @update:visible="updateDialogVisible2"
        :calculation-results="calculationResults"
    ></metrics-result-dialog>
  </div>
</template>

<script>

import SimilarRulesDialog from "./commpoents/SimilarRulesDialog.vue";
import MetricsResultDialog from "./commpoents/MetricsResultDialog.vue"; // 请根据实际路径调整

export default {
  components: {MetricsResultDialog, SimilarRulesDialog},
  data() {
    return {
      activeTab: 'outerRules',
      outerRulesData: [
        { id: 1, title: '外规标题1' },
        { id: 2, title: '外规标题2' },
        // Add more data as needed
      ],
      innerRulesData: [
        { id: 1, title: '内规标题1', department: '部门A' },
        { id: 2, title: '内规标题2', department: '部门B' },
        // Add more data as needed
      ],
      selectedIds: [], // 数组实时记录选中行的id
      detailedExReg: {
        id: 0,
        title: "test",
        content: "123"
      },
      detailedInReg: {
        id: 0,
        title: "test",
        department: "abc",
        content: "123"
      },
      detailedExVisible: false,
      detailedInVisible: false,

      dialogVisible1: false,
      dialogVisible2: false,
      selectedRow: null,
      // 模拟计算结果数据
      calculationResults: {
        apResults: [
          { id: 1, title: '外规标题1', ap: 0.85 },
          { id: 2, title: '外规标题2', ap: 0.92 },
          // Add more data as needed
        ],
        apOverallResult: 0.89,
        mapOverallResult: 0.78,
      },
    };
  },
  methods: {
    calculateMetrics() {
      // 模拟计算指标的逻辑
      console.log('计算选中外规的评估指标', this.selectedIds);
      // 在真实情况下，您需要在这里进行实际的计算逻辑，并更新 this.calculationResults
      this.dialogVisible2 = true;
    },
    handleSelectionChange(selection) {
      // 当选中行发生变化时更新 selectedIds 数组
      this.selectedIds = selection.map(item => item.id);
    },
    openSimilarRulesDialog(row) {
      this.selectedRow = row;
      this.dialogVisible1 = true;
    },
    updateDialogVisible1(value) {
      this.dialogVisible1 = value;
    },
    updateDialogVisible2(value) {
      this.dialogVisible2 = value;
    },
    viewOuterRule(row) {
      console.log('查看外规', row);
      this.detailedExVisible = true;
    },
    viewInnerRule(row) {
      console.log('查看内规', row);
      this.detailedInVisible = true;
    },
  },
};
</script>

<style scoped>
.content-container {
  height: 100%;
  padding: 20px;
  border-left: 1px solid #ebeef5;
}
</style>
