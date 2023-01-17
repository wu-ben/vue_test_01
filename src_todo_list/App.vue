<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <my-header @addTodo="addTodo"/>
                <my-list :todos="todos" />
                <my-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    mounted () {
        // 使用全局事件总线
        // this.$bus.$on('checkTodo', this.checkTodo);

        // 使用消息队列与发布
        this.pubId = pubsub.subscribe('checkTodo', this.checkTodo2)

        this.$bus.$on('updateTodo', this.updateTodo)
        this.$bus.$on('deleteTodo', this.deleteTodo);
    },
    methods:{
        addTodo(x) {
            this.todos.unshift(x)
        },
        checkTodo(id) {
            this.todos.forEach((item) => {
                if(item.id === id) item.done = !item.done
            })
        },
        // 消息队列与发布所用函数，区别是多一个参数
        checkTodo2(_, id) {
            this.todos.forEach((item) => {
                if(item.id === id) item.done = !item.done
            })
        },
        updateTodo(id, title){
            this.todos.forEach(item => {
                if(item.id === id){
                    item.title = title
                }
            })
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(item => item.id !== id)
        },
        checkAllTodo(done) {
            this.todos.forEach((todo) => {
                todo.done = done
            })
        },
        clearAllTodo() {
            this.todos = this.todos.filter(item => !item.done)
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    beforeDestroy () {
        // 解绑事件总线定义的事件
        //this.$bus.$off('checkTodo');

        // 解绑消息队列与发面定义的事件
        pubsub.unsubscribe(this.pubId)
        this.$bus.$off('updateTodo')
        this.$bus.$off('deleteTodo');
    },
}
</script>

<style>
/* base */
body {
    background-color: #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-style: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: insert 0 1px 0 rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-edit {
    color: #fff;
    background-color: #497cda;
    border: 1px solid #4274d3;
}
.btn:focus {
    outline: none;
}
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
