export default {
    //通过todos 的complete属性 返回图标的颜色
    allDone(state, getters) {
      return state.todos.length === getters.completeSize && state.todos.length > 0;
    },
    completeSize(state) {
        return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
    },
    totalSize(state) {
        return state.todos.length
    },
    leftSize(state, getters) {
        return getters.totalSize - getters.completeSize
    },
    filterTodos(state) {
        if (state.filterState === '' || state.filterState === 'all') {
            return state.todos
        }
        else if (state.filterState === 'active') {
            return state.todos.filter(todo => !todo.complete)
        }
        else if (state.filterState === 'completed') {
            return state.todos.filter(todo => todo.complete)
        }

    }
}

