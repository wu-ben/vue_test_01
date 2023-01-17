<template>
    <div class="student-info mb20">
        <p>学校名称： {{ name }}</p>
        <p>学校地址： {{ address }}</p>
        <p>
            <button @click="sendName">向App传递学校名字</button>
            <button @click="unbind">解绑事件</button>
        </p>
        <p v-show="studentName">我是School组件，收到了学生姓名 {{studentName}}</p>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京昌平',
                studentName: '',
            }
        },
        mounted() {
            this.$bus.$on('hello', (data) => {
                //console.log('我是School组件，收到了数据', data)
                this.studentName = data
            })
        },
        methods: {
            sendName() {
                this.$emit('atguigu', this.name, 666, 888, 999)
            },
            unbind() {
                this.$off('atguigu')
                
                // this.$off(['aa', 'bb']) // 解绑多个
                // this.$off() // 解绑所有
            },
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style>
.student-info{
    padding: 5px 10px;
    border: 1px solid #000;
    background-color: lightblue;
}
</style>