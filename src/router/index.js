import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import QueryDetail from '../pages/QueryDetail'
import ParamsDetail from '../pages/ParamsDetail'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    // 使用params传参，router-link中必须使用这里的name,不能用path
                    children: [
                        {
                            name: 'params-info',
                            path: 'params-detail/:id/:title',
                            component: ParamsDetail,
                            // params下props设为真表示默认参数都会传给component
                            props: true
                        },
                    ],
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'query-info',
                            path: 'query-detail',
                            component: QueryDetail,
                            // props写为函数方式。query下不支持true/false写法
                            /* props($router) {
                                return {id: $router.query.id, title: $router.query.title}
                            }, */

                            // 解构赋值
                            /* props(query) {
                                return {id: query.id, title: query.title}
                            }, */

                            // 解构赋值再简写
                            props({query:{id, title}}) {
                                return {id, title}
                            },

                        },
                    ],
                },
            ],
        },
    ],
})
