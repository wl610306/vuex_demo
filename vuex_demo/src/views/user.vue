<template>
  <div class="user">
    <h1>This is an user page</h1>
     <div>
      商品列表页面，当前第{{ $route.params.id }}页
  </div>
  </div>
</template>
<script>
export default {
   name: 'user',
   mounted(){
     console.log('user 完成')
   },
   methods:{
   }

}
</script>