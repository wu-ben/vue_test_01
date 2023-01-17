<template>
    <div>
        <ul class="list">
            <li v-for="item in msList" :key="item.id">
                <router-link
                    :to="{
                        // path: '/home/message/detail',
                        name: 'query-info',
                        query: {
                            id: item.id,
                            title: item.title,
                        },
                    }"
                    class="list-item"
                    active-class="active"
                    >{{ item.title }}
                </router-link>
                <button @click="pushShow(item)">push查看</button>
                <button @click="replaceShow(item)">replace查看</button>
            </li>
        </ul>
        <div class="info">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            msList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
                { id: '004', title: '消息004' },
            ],
        }
    },
    methods: {
        pushShow(item) {
            this.$router.push({
                name: 'query-info',
                query: {
                    id: item.id,
                    title: item.title,
                },
            })
        },
        replaceShow(item) {
            this.$router.replace({
                name: 'query-info',
                query: {
                    id: item.id,
                    title: item.title,
                },
            })
        },
    },
}
</script>
