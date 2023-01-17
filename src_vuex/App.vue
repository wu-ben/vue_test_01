<template>
    <div>
        <h1>当前求和为： {{ $store.state.sum }}</h1>
        <h3>当前求和放大10倍后为： {{ bigSum }}</h3>
        <h3>我在 {{ school }} 学 {{ subject }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前和为奇数时才加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters, } from 'vuex'
export default {
    name: 'App',
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        /* ...mapState({
            school: 'school',
            subject: 'subject',
        }), */
        ...mapState(['school', 'subject']),
        ...mapGetters(['bigSum']),
    },
    mounted() {},
    methods: {
        /* incrementOdd(n) {
            this.$store.dispatch('jiaOdd', n)
        },
        incrementWait(n) {
            this.$store.dispatch('jiaWait', n)
        }, */
        ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
       
        /* increment(n) {
            // this.sum += this.n
            this.$store.commit('JIA', n)
        },
        decrement(n) {
            // this.sum -= this.n
            this.$store.commit('JIAN', n)
        }, */

        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
        ...mapMutations({
            increment: 'JIA',
            decrement: 'JIAN',
        }),

    },
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>