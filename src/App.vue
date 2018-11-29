<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count++">추가</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: "별이야 오늘도 내 무릎에서 자고 있구나!",
        count: 1
      }
    }
  }
</script>
