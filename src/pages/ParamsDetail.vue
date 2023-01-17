<template>
    <div>
        <p>编号 使用 $outer.params.id 方式 ：{{ $route.params.id }}</p>
        <p>标题 使用 props.title 方式：{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'ParamsDetail',
    props: ['id', 'title']
}
</script>