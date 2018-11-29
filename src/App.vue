<template>
  <div>
    <AppStatus></AppStatus>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count++">추가</button>
    <Home2></Home2>
  </div>
</template>

<script>
  import Home2 from './components/Home2'  //확장자 생략가능 Home2.vue -> Home2
  
  export default {
    components: {
      Home2
    },
    data () {
      return {
        title: "별이야 오늘도 내 무릎에서 자고 있구나!",
        count: 1
      }
    }
  }
</script>
