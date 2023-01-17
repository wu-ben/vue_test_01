<template>
    <div class="school-info mb20">
        <p>姓名： {{name}}</p>
        <p>性别： {{sex}}</p>
        <p><button @click="sendName">向App传递学生名字</button></p>
        <p><button @click="sendToSchool">向School传递学生名字</button></p>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Student',
        props: ['getStudentName'],
        data() {
            return {
                name: '张三',
                sex: '男',
                age: 19
            }
        },
        methods: {
            sendName() {
                this.getStudentName(this.name)
            },
            sendToSchool() {
                this.$bus.$emit('hello', 666)
            }
        },
        
    }
</script>

<style>
.school-info{
    padding: 5px 10px;
    border: 1px solid #000;
    background-color: lightcoral;
}
</style>