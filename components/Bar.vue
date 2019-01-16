<template>
    <div class="bar">
        <h1>Bar2</h1>
        <p>Component</p>
        <div>{{bar}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bar: '',
            };
        },
        created() {
            this.bar = this.$eventBus._data.bar;
        },
    };
</script>
<style lang="css">
    .bar {
        background: orange;
    }
</style>

