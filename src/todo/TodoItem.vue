<template>
    <div class="todo-item">
        <input class="complete" 
            v-model="todo.completed" 
            type="checkbox"/>
        <span class="content">{{todo.content}}</span>
        <span @click="deleteTodo" class="clear">x</span>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo() {
            this.$emit('deleteItem',this.todo.id);
        }
    }
}
</script>
<style>
.todo-item {
    border: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    padding: 0 15px;
    display: flex;
    align-items: center;
}
.content {
    flex: 1;
    padding-left: 20px;
}
.clear {
    cursor: pointer;
}
.clear:hover {
    font-size: 24px;
}
</style>