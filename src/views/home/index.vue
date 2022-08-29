<template>
  <div class="about">
    <!-- <h1 ref="hrRef">This is an about page</h1>
    <el-button type="primary">Primary</el-button> -->
    <v-table :data="data" :columns="columns" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import vTable from '@/components/Table/index.vue'
// import dayjs from 'dayjs'
import { ElButton } from 'element-plus'
// import { ElButton } from 'element-plus'
const dataGenerator = (id) => ({
  id: `random-id-${++id}`,
  name: 'Tom',
  date: '2020-10-1',
})

// {dayjs(date).format('YYYY/MM/DD')}
// <ElTooltip content={dayjs(date).format('YYYY/MM/DD')}>
//         {
//           <span class="flex items-center">
//             <ElIcon class="mr-3">
//               <Timer />
//             </ElIcon>
//           </span>
//         }
//       </ElTooltip>
const columns = [
  {
    key: 'date',
    title: 'date',
    dataKey: 'date',
    width: 150
  },
  {
    key: 'name',
    title: 'name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    // cellRenderer: ({ cellData: name }) => (<ElTag>{name}</ElTag>)
  },
  {
    key: 'id',
    title: 'id',
    width: 150,
    align: 'center',
    // cellRenderer: () => (
    //   <>
    //     <ElButton size="small">Edit</ElButton>
    //   </>
    // )
  }
]

const data = ref([])
data.value = Array.from({ length: 5 }).map((i, index) => dataGenerator(index))
</script>
