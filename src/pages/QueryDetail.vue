<template>
    <div>
        <p>编号 使用 props.id 方式：{{ id }}</p>
        <p>标题 使用 $route.query.title 方式：{{ $route.query.title }}</p>
    </div>
</template>

<script>
export default {
    name: 'QueryDetail',
    props: ['id', 'title']
}
</script>