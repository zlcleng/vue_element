<template>
  <div class="mj-table">
    <!--  v-on="$listeners" -->
    <el-table v-bind="$attrs" style="width: 100%;" size="small" @sort-change='sortthiscolumn'>
      <template v-for="(column, index) in columns" :key="index">
        <table-cell :column="column" />
      </template>
    </el-table>
    <el-pagination
      v-show="$attrs.total > 0 && showPagination"
      layout="total, sizes, prev, pager, next, jumper"
      v-bind="$attrs"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import tableCell from './cell'

export default {
  components: {
    tableCell
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  inheritAttrs: false,
  mounted () {
  },
  methods: {
    handleSizeChange (v) {
      this.$emit('update:page-size', v)
      this.$emit('change')
    },
    handleCurrentChange (v) {
      this.$emit('update:current-page', v)
      this.$emit('change')
    },
    sortthiscolumn (column) {
      this.$emit('sortChange', column)
    }
  }
}
</script>

<style lang="less" scoped>
.mj-table {
  /deep/ .el-pagination {
    text-align: right;
    margin-top: 20px;
  }
  /deep/ .el-table th {
    background: #fafafa;
    padding: 15px 0;
    .cell {
      font-size: 14px;
      color: #000;
    }
  }
}
</style>
