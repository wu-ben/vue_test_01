<template>
    <ul class="todo-main">
        <transition-group appear name="hello">
            <my-item v-for="it in todos" :key="it.id" :todo="it" />
        </transition-group>
    </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name: 'MyList',
    components: { MyItem },
    props: ['todos'],
}
</script>

<style scoped>
/* main */
.todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
}
.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
.hello-enter {
    transform: translateX(100%);
}
.hello-leave-to {
    transform: translateX(-100%);
}
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
.hello-enter-active,
.hello-leave-active {
    transition: 0.2s linear;
}
</style>