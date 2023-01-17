<template>
    <div>
        <ul class="list">
            <li :style="{opacity}">欢迎学习Vue</li>
            <li v-for="item in msList" :key="item.id">
                <router-link
                    :to="{
                        name: 'params-info',
                        params: {
                            id: item.id,
                            title: item.title
                        }
                    }"
                    class="list-item"
                    active-class="active"
                    >{{ item.title }}
                </router-link>
                <input type="text">
            </li>
        </ul>
        <div class="info">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1,
            msList: [
                { id: '001', title: '新闻001' },
                { id: '002', title: '新闻002' },
                { id: '003', title: '新闻003' },
                { id: '004', title: '新闻004' },
            ],
        }
    },
    mounted() {
        
    },
    beforeDestroy() {
        
    },
    activated() {
        console.log('News被激活了')
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if(this.opacity <=0) {
                this.opacity = 1
            }
        }, 16)
    },
    deactivated() {
        console.log('News失活了')
        clearInterval(this.timer)
    }
}
</script>
