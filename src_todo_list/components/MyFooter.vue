<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll" />
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </label>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    data() {
        return {
            name: 'footer',
        }
    },
    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            return this.todos.reduce((pre, todo) => pre + (todo.done & 1), 0)
        },
        isAll: {
            get() {
                return this.total !== 0 && this.doneTotal === this.total
            },
            set(value) {
                this.$emit('checkAllTodo', value)
            }
        },
    },
    methods: {
        clearAll(){
            if(confirm('确定清除已完成任务吗？')) {
                this.$emit('clearAllTodo')
            }
        }
    }
}
</script>

<style>
/* footer */
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>