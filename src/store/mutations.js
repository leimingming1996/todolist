import {ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODO, CHECK_ALL, MODIFY_FILTER_STATE, SAVE_TODO} from "./mutations-type";

export default {
    // 添加todo到todos中
    [ADD_TODO] (state, {todo}) {
        state.todos.unshift(todo)
    },
    // 删除指定的todo
    [DELETE_TODO] (state, {index}) {
        state.todos.splice(index, 1)
    },
    // 删除完成的todo
    [CLEAR_COMPLETED_TODO] (state) {
        state.todos = state.todos.filter(todo => !todo.complete)
    },
    // 全选或全不选
    [CHECK_ALL] (state, {isCheckAll}) {
        state.todos.forEach(todo => todo.complete=isCheckAll)
    },
    [MODIFY_FILTER_STATE] (state, {hash}) {
        state.filterState = hash
    },
    [SAVE_TODO] (state, newTodo) {
        window.console.log(newTodo)
        const todo = state.todos[newTodo.index]
        todo.content = newTodo.currentTodo
        state.todos[newTodo.index] = todo
    }
}
