import {ADD_TODO,DELETE_TODO,CLEAR_COMPLETED_TODO,CHECK_ALL,MODIFY_FILTER_STATE,SAVE_TODO} from "./mutations-type";

export default {
    addTodo({commit}, todo) {
        commit(ADD_TODO, {todo})
    },
    deleteTodo({commit}, index) {
        commit(DELETE_TODO, {index})
    },
    clearCompletedTodo({commit}) {
        commit(CLEAR_COMPLETED_TODO)
    },
    checkAll({commit}, isCheckAll) {
        commit(CHECK_ALL, {isCheckAll})
    },
    modifyFilterState({commit}, hash) {
        commit(MODIFY_FILTER_STATE, {hash})
    },
    saveTodo({commit}, newTodo) {
        commit(SAVE_TODO, newTodo)
    }

}
