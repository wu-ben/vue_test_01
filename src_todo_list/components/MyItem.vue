<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" ref="inputTitle" type="text" :value="todo.title" @blur="handleBlur($event, todo)">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'MyItem',
    props: ['todo'],
    /* data() {
        return {
            name: 'item',
        }
    }, */
    methods: {
        handleCheck(id) {
            // this.checkTodo(id)
            // this.$bus.$emit('checkTodo', id)
            pubsub.publish('checkTodo', id)
        },
        handleEdit(todo) {
            // eslint-disable-next-line no-prototype-builtins
            if(todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(function() {
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(e, todo) {
            todo.isEdit = false
            if(!e.target.value.trim()) {
                alert('输入不能为空')
                return
            }
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
        },
        handleDelete(id) {
            if(confirm('确定删除吗？')) {
                this.$bus.$emit('deleteTodo', id)
            }
        }
    }
}
</script>

<style scoped>
/* item */
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li:hover {
    background-color: lightGray;
}
li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:hover button {
    display: block;;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}
</style>