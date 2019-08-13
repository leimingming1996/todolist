<template>
    <div class="main">
        <ul class="todo-list">
            <todo-item v-for="(todo,index) in filterTodos" :todo="todo" :index="index" :key="index"></todo-item>
        </ul>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import TodoItem from '../components/TodoItem'
    export default {
        components: {
          TodoItem
        },
        computed: {
            ...mapGetters(['filterTodos'])
        }
    }
</script>

<style>
.main{
    border-top: 1px solid #ededed;
}
.todo-list{
    margin: 0;
    padding: 0;
    list-style: none;
}
.view{
    font-size: 24px;
}
.todo-list li{
    border: 1px solid #ededed;
    border-top: 0;
}
.todo-list li .todo-content{
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    line-height: 1.2;
    transition: color 0.4s;
}
</style>
