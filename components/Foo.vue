<template>
    <div class="foo">
        <h1>Foo</h1>
        <p>Component</p>
        <div>{{foo}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                foo: '',
            };
        },
        created() {
            this.foo = this.$eventBus._data.foo;
        },
    };
</script>
<style lang="css">
    .foo {
        background: yellow;
    }
</style>
