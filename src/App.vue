<template>
  <div id="app">
    <LogIn/>
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue'
// import system from './components/system.vue'

export default {
  name: 'App',
  components: {
    LogIn
  },
  data() {
    return {
      
    }
    
  },
  methods: {
    
  },
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
}

html,
body {
    font-family: Arial;
    width: 100%;
    height: 100%;
}

</style>
