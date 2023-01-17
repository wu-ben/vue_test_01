<template>
    <div class="box">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊1 transition .hello-enter, .hello-leave-to</h1>
        </transition>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test2',
    data() {
        return {
            isShow: true,
        }
    },
}
</script>

<style scoped>
h1 {
    background-color: orange;
}
/* 进入/离开的过程 */
.hello-enter-active, .hello-leave-active{
    transition: .5s linear;
}
/* 进入的起点 */
.hello-enter, .hello-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to, .hello-leave{
    transform: translateX(0);

}

</style>