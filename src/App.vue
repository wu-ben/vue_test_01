<template>
    <div>
        <banner />
        <div class="section">
            <div class="sub">
                <!-- <a href="about" class="sub-a active">about</a>
                <a href="home" class="sub-a">home</a> -->
                <router-link to="/about" class="sub-a" active-class="active"
                    >about</router-link
                >
                <router-link to="/home" class="sub-a" active-class="active"
                    >home</router-link
                >
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
export default {
    name: 'App',
    components: {
        Banner,
    },
}
</script>

<style>
.bd {
    border: 1px solid #000;
}
.section {
    display: flex;
}
.sub {
    padding: 20px;
    width: 20%;
    background-color: rgb(251, 218, 218);
}
.sub-a {
    margin-bottom: 10px;
    display: block;
    padding: 4px 8px;
    color: #fff;
    background-color: rgb(128, 128, 128);
}
.sub-a.active {
    background-color: rgb(77, 107, 59);
}
.main {
    flex: auto;
    padding: 20px;
    background-color: rgb(252, 244, 211);
}
</style>