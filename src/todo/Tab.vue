<template>
    <div class="tab-wrap">
        <span class="tab-left">{{leftItem}} items left.</span>
        <div class="status-wrap">
            <span v-for="st in status" :key="st" class="status"
            :class="{active: filter===st}"
            @click="toggle(st)">{{st}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            status: ['All', 'Todo', 'Completed']
        }
    },
    computed: {
        leftItem() {
            return this.todos.filter(item => !item.completed).length;
        },
    },
    methods: {
        toggle(status) {
            this.$emit('toggle', status);   
        }
    }

}
</script>

<style>
.tab-wrap {
    display: flex;
    padding: 10px;
    align-items: center;
    color: #ccc;
}

.status-wrap {
    border: 1px solid #ccc;
    border-radius: 2px;
    margin: 0 auto;
}
.status {
    width: 100px;
    padding: 10px 0;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    border-right: 1px solid #ccc;
}
.status.active {
    font-weight: bold;
    font-size: 20px;
}
.status:last-child {
    border: none;
}
</style>