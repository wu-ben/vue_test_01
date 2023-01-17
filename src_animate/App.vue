<template>
    <div>
        <test1/>
        <test2/>
        <test3/>
    </div>
</template>

<script>
import test1 from './components/test1'
import test2 from './components/test2'
import test3 from './components/test3'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'App',
    components: {
        test1,
        test2,
        test3,
    },
    
}
</script>
<style>
.box {
    margin-bottom: 10px;
    padding: 5px 10px;
    border: 1px solid #000;
}
</style>
