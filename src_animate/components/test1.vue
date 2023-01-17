<template>
    <div class="box">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition>
            <h1 v-show="isShow">你好啊1 Animation .enter-active, leaver-active</h1>
        </transition>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊1 Animation transition name appear</h1>
        </transition>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test',
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

.v-enter-active, .hello-enter-active {
    animation: atguigu .5s linear;
}
.v-leave-active, .hello-leave-active {
    animation: atguigu .5s linear reverse;
}
@keyframes atguigu {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0)
    }
}
</style>