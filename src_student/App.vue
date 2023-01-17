<template>
    <div>
        <!-- <school @atguigu="getSchoolName"/> -->
        <school ref="school"/>
        <student :getStudentName="getStudentName" />
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
    name: 'App',

    components: {
        Student,
        School
    },

    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.$refs.school.$on('atguigu', this.getSchoolName)
    },
    methods: {
        getSchoolName(name, ...params) {
            console.log('App收到了学校名：', name, params)
        },
        getStudentName(name) {
            console.log('App收到了学生名：', name)
        }
    },
}
</script>

<style>
.mb20{margin-bottom: 20px;}
</style>