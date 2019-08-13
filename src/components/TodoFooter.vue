<template>
    <div class="footer" v-show="totalSize">
        <span>{{leftSize}} items left</span>
        <ul class="filters">
            <li>
                <a :class="{selected:selected==='All'}" @click="filterTodo('All')" href="#/">All</a>
            </li>
            <li>
                <a :class="{selected:selected==='Active'}" @click="filterTodo('Active')" href="#/active">Active</a>
            </li>
            <li>
                <a :class="{selected:selected==='Completed'}" @click="filterTodo('Completed')" href="#/completed">Completed</a>
            </li>
        </ul>
        <a class="completed" v-show="totalSize !== leftSize" @click="clearCompletedTodo">Clear completed</a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data () {
            return {
                selected: 'All'
            }
        },
        computed: {
            ...mapGetters(['totalSize','leftSize'])
        },
        methods: {
            clearCompletedTodo () {
                // 删除完成的todo
                this.$store.dispatch('clearCompletedTodo')
            },
            filterTodo (state) {
                this.selected = state
            }
        },
        mounted() {
            window.onhashchange = () => {
                // window.location.hash  获取的是这样的数据 #/active
                const hash=window.location.hash.substr(2) || 'all';
                //将状态值赋值filterState
                this.$store.dispatch("modifyFilterState", hash)
            }
            window.onhashchange ()
        }

    }
</script>

<style scoped>
*{
    font-size: 14px;
    font-weight: 300;
}
.footer{
    border: 1px solid #ededed;
    border-top: 0;
    height: 30px;
    line-height: 30px;
    padding: 0px 15px;
}
.filters{
    list-style: none;
    display: inline;
    padding-left: 65px;
}
.filters li{
    display: inline;
}
.filters li a{
    color: inherit;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 2px 5px;
    margin: 0px 3px;
}
.filters li a.selected{
    border-color: rgba(175, 47, 47, 0.2);
}
.completed{
    color: inherit;
    float: right;
}
</style>
