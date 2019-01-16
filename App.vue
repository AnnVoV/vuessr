<template>
    <div>
        <h1>App.vue</h1>
        <p>vue with vue</p>
        <div>{{ test }}</div>
        <hr/>
        <foo></foo>
        <bar></bar>
    </div>
</template>
<script>
    import Foo from './components/Foo.vue';
    import Bar from './components/Bar.vue';

    export default {
        beforeMount() {
            console.log('App beforeMount');
        },
        created() {
            this.test = this.$eventBus._data.test;
        },
        components: {
            Foo,
            Bar,
        }
    }
</script>
