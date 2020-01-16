<template>
    <div id="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>
#container{
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>