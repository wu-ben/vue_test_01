<template>
    <div>
        <!-- <ul class="nav">
            <li class="active">news</li>
            <li>message</li>
        </ul> -->
        <div class="nav">
            <router-link to="/home/news" class="nav-item" active-class="active">params 传参</router-link>
            <router-link to="/home/message" class="nav-item" active-class="active">query 传参</router-link>
        </div>
        <div class="content">
            <!-- include components.name -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style>
.nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.nav-item {
    margin: 0;
    margin-right: 4px;
    padding: 0;
    padding: 5px 10px;
    border: 1px solid rgb(117, 117, 117);
    background-color: #fff;
    cursor: pointer;
}
.nav-item.active {
    color: #fff;
    background-color: rgb(67, 132, 178);
}
.content{
    margin-top: -1px;
    padding: 5px 10px;
    border: 1px solid rgb(117, 117, 117);
}

/* detail */
.list-item {
    color: grey;
    line-height: 32px;
}
.list-item.active {
    color: blue;
}
.info {
    padding: 10px 20px;
    border: 1px solid rgb(0, 0, 0);
    background-color: rgb(248, 248, 248);
}
</style>>
