<template>
    <div class="box">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__backInDown"
            leave-active-class="animate__backOutUp"
         >
            <h1 v-show="isShow">
                你好啊1 animate.css
            </h1>
        </transition>
    </div>
</template>

<script>
import 'animate.css'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test3',
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
</style>