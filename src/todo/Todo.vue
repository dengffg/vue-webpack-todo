<template>
    <div class="main">
        <input 
            class="add-input" 
            placeholder="请输入代办事项"
            @keyup.enter="addTodo"/>
        <tab :filter="filter" :todos="todos"
            @toggle="toggleStatus"/>
        <todo-item v-for="todo in showTodos" :key="todo.id" 
            :todo="todo"
            @deleteItem="deleteTodo"/>
    </div>
</template>

<script>
import Tab from './Tab.vue';
import TodoItem from './TodoItem.vue';

let id=0;

export default {
    components: {
        TodoItem,
        Tab
    },
    data() {
        return {
            todos: [],
            filter: 'All'
        }
    },
    computed: {
         showTodos() {
            if (this.filter === 'All') {
                return this.todos;
            }

            return this.todos.filter(item => this.filter==='Completed' ? 
            item.completed : !item.completed)
        }
    },
    methods: {
        addTodo(event) {
            this.todos.push({
                id: id++,
                content: event.target.value.trim(),
                completed: false
            })
            event.target.value = '';
        },
        deleteTodo(id) {
            this.todos.splice(id, 1);
        },
        toggleStatus(status) {
            this.filter = status;
        }
    }
}
</script>

<style>
.main {
    width: 600px;
    margin: 0 auto;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
}

.main .add-input{
    height: 35px;
    line-height: 35px;
    width: 100%;
    padding: 0 15px;
    border: none;
    outline: none;
    color: #3a3a3a;
    font-size: 18px;
}
.main .add-input:focus {
    outline: none;
}
</style>