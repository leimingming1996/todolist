<template>
    <li @mouseenter="handlerEnter(true)" @mouseleave="handlerEnter(false)" :class="{editing:currentTodo}">
        <div class="view">
            <a-checkbox v-model="todo.complete" style="padding:0px 0px 10px 10px "></a-checkbox>
            <label class="todo-content" :class="{'completeLable':todo.complete}" @dblclick="toEdit(todo.content)">{{todo.content}}</label>
            <a-icon type="close" v-show="isShow" @click="deleteTodo" style="color:#cc9a9a;float: right;font-size: 18px;padding: 13px 20px 0 0;"></a-icon>
        </div>
        <a-input v-show="currentTodo" :value="todo.content" size="large" @keyup.enter="saveTodo"  @keyup.esc="cancelEdit"  @blur="saveTodo" v-model="currentTodo"></a-input>
    </li>
</template>

<script>
    export default {
        data () {
          return {
              isShow: false,
              currentTodo: ''
          }
        },
        props: {
            todo: Object,
            index: Number
        },
        methods: {
            deleteTodo (){
                //删除todo
                this.$store.dispatch('deleteTodo', this.index)
            },
            handlerEnter(isShow){
                this.isShow = isShow
            },
            toEdit (content) {
                this.currentTodo = content
            },
            cancelEdit () {
                this.currentTodo = null
            },
            saveTodo () {
                const index = this.index
                const currentTodo = this.currentTodo
                const newTodo = {
                    index: index,
                    currentTodo: currentTodo
                }

                this.$store.dispatch('saveTodo', newTodo)
                this.currentTodo = null
            }

        }
    }
</script>

<style>
.completeLable{
    text-decoration: line-through solid #EEEEE0;
}
.editing > .view{
    display: none;
}
</style>
