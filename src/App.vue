<template>
  <div id="app">
    App根组件
  </div>
</template>

<script>
import {getListAPI} from "@/api";

export default {
  name: 'App',
  created() {
    this.getListFn()
  },
  methods: {

    //使用async/await获取成功的结果
    async getListFn() {
      const res = await getListAPI()
      console.log(res)
    }
  }
}
</script>

<style>

</style>
