<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      商品列表页面，当前第{{ aboutName }}页{{ count }}<br />
      {{ name }} {{ aboutCount }}
      <br />
      <el-button @click="btnClick('About')">first</el-button>
      <el-button @click="putTest('About')">动态注册</el-button>
      <br/>新注册store——{{rightTest}}
      <ul>
        <li v-for="item in todosALise" :key="item.id">
          <span>{{ item.text }}</span> <br />
          <span>{{ item.done }}</span>
        </li>
      </ul> 
      <ul>
        <li v-for="item in aboutList" :key="item.id">
          <span>{{ item.text }}</span> <br />
          <span>{{ item.done }}</span>
        </li>
      </ul> 
    </div>
  </div>
</template>
<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
import registStore from '../store/regist_stroe'
export default {
  name: 'about',
  data() {
    return {
      // aboutNames: '',
      // aboutCount: ''
    }
  },
  computed: {
    ...mapState({
      name: 'name',
      count: 'count',
      aboutCount: state => state.about.count + 1,
      aboutName: state => state.about.name,
      rightTest: state => state.REGIST.a,
    }),
    ...mapGetters({
      todosALise: 'INDEX_GETTERS',
      aboutList:'ABOUT_GETTERS'
    })
  },
  created(){
    registStore.install('REGIST',{'a':'100','b':'200'})
    console.log(this.$store)
  },
  mounted() {
    // this.aboutNames = this.aboutName
    // this.aboutCount = this.count
  },
  methods: {
      ...mapActions({
      btnClick: 'ABOUT_ACTIONS',
      putTest:'REGIST/setTest'
    }),
    ...mapMutations({
      // putTest:'REGIST/putTest'
    })
    // btnClick(val) {
    //   //  this.aboutNames = this.aboutName + 56
    //   this.$store.commit({ type: 'ABOUT_MUTATION', value: val, n: 1 })
    //   // this.aboutNames = this.aboutName
    //   // this.aboutCount = this.count + 500
    // }
  }
}
</script>