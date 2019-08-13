<template>
    <div>
        <a-input placeholder="What needs to be done?" size="large" @keyup.enter="addTodo" v-model="todoContent">
            <a-icon  slot="prefix" type="down" :style="{color:iconColor}" v-show="totalSize" v-model="isCheck" @click="checkAll"/>
        </a-input>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data () {
            return {
                todoContent: '',
                isCheck: this.$store.getters.allDone
            }
        },
        methods: {
            addTodo () {
                const todoContent = this.todoContent.trim()
                if (todoContent) {
                    const todo = {
                        content: todoContent,
                        complete: false
                    }
                    //调用actions
                    this.$store.dispatch("addTodo", todo)
                    this.todoContent = '' // 清空输入内容
                }
            },
            checkAll () {
                this.isCheck = !this.isCheck
                this.$store.dispatch('checkAll',this.isCheck)
            }
        },
        computed: {
            ...mapGetters(['totalSize']),
            iconColor (){
                return this.$store.getters.allDone ? 'rgba(0, 0, 0, 0.65)' : '#EBEBEB'
            }
        }
    }
</script>

<style>

</style>
