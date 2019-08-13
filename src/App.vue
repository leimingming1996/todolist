<template>
  <div id="app">
    <a-layout  class="layout">
      <h1>todos</h1>
      <a-layout-content style="padding: 0 50px;">
        <div class="todo-main">
          <todo-header></todo-header>
          <todo-list></todo-list>
          <todo-footer></todo-footer>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        todolist ©2019 Created by leimingming
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  mounted() {
    window.location.hash = '#/'
    this.$store.dispatch("modifyFilterState", '')
  }
}
</script>

<style>
  .layout{
  }
  h1{
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15) !important;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
  .todo-main{
    background: #fff;
    padding: 24px;
    minHeight: 280px;
    height: 100% ;
    width: 50%;
    margin: 0 auto;
  }
</style>
