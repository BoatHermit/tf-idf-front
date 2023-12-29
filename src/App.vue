<template>
  <div>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="外规" name="outerRules">
        <el-row>
          <el-col :span="16">
            <el-table :data="outerRulesData" style="width: 100%" stripe>
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
              <div v-if="activeTab === 'outerRules'">外规内容</div>
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
              <div v-if="activeTab === 'innerRules'">内规内容</div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <!-- 弹窗 -->
    <el-dialog title="计算相似内规" :visible.sync="dialogVisible">
      <!-- 弹窗内容 -->
    </el-dialog>
  </div>
</template>

<script>
export default {
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
      dialogVisible: false,
    };
  },
  methods: {
    openSimilarRulesDialog(row) {
      // 实现打开弹窗的逻辑
      console.log('计算相似内规', row);
      this.dialogVisible = true;
    },
    viewOuterRule(row) {
      // 实现查看外规的逻辑
      console.log('查看外规', row);
    },
    viewInnerRule(row) {
      // 实现查看内规的逻辑
      console.log('查看内规', row);
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
